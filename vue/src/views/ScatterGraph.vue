<!-- <template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script> -->

<script setup>
import { ref, onMounted, computed } from 'vue'
import ScatterComponent from '../components/ScatterComponent.vue'
const chartData = ref('')
async function getDataFromAPI(url) {
  try {
    let response = await fetch(url)
    if (response.status < 200 || response.status > 299) {
      console.log(response.status)
      throw Error(response.status)
    } else {
      chartData.value = await response.json()
      console.log(chartData.value)
    }
  } catch (error) {
    console.log(error)
    this.$router.push(`/error/${error}`)
  }
}
onMounted(() => {
  this.loaded = false
  getDataFromAPI(
    'https://data.cityofnewyork.us/resource/9hxz-c2kj.json?$query=SELECT%0A%20%20%60entityid%60%2C%0A%20%20%60schoolname%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60number%60%2C%0A%20%20%60street%60%2C%0A%20%20%60address_line_1%60%2C%0A%20%20%60address_line_2%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60lastinspection%60%2C%0A%20%20%60permittee%60%2C%0A%20%20%60inspectiondate%60%2C%0A%20%20%60code%60%2C%0A%20%20%60violationdescription%60%2C%0A%20%20%60level%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60communityboard%60%2C%0A%20%20%60councildistrict%60%2C%0A%20%20%60censustract%60%2C%0A%20%20%60bin%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60nta%60'
  ).then(async function () {
    const brooklynData = await chartData.value.filter((info) => info.borough === 'Brooklyn')
    const manhattanData = await chartData.value.filter((info) => info.borough === 'Manhattan')
    const queensData = await chartData.value.filter((info) => info.borough === 'Queens')
    const bronxData = await chartData.value.filter((info) => info.borough === 'Bronx')
    const statenIslandData = await chartData.value.filter(
      (info) => info.borough === 'Staten Island'
    )

    return brooklynData, manhattanData, queensData, bronxData, statenIslandData
  })
  this.loaded = true
})

const selectedDropdownOption = ref('')
</script>

<template>
  <!-- <p>{{ selectedDropdownOption }}</p> -->
  <div v-if="loaded" id="selector-bin">
    <label for="graphs">Select Data: </label>

    <select id="data-selector" v-model="selectedDropdownOption">
      <option selected :value="allData">All Boroughs</option>
      <option :value="brooklynData">Brooklyn</option>
      <option :value="queensData">Queens</option>
      <option :value="bronxData">Bronx</option>
      <option :value="manhattanData">Manhattan</option>
      <option :value="statenIslandData">Staten Island</option>
    </select>
  </div>

  <ScatterComponent
    v-if="loaded"
    :chartData="{
      labels: ['G', 'C', 'AV'],
      datasets: [
        {
          data: [
            selectedDropdownOption.value.filter((info) => {
              info.level === 'G'
            }),
            selectedDropdownOption.value.filter((info) => {
              info.level === 'C'
            }),
            selectedDropdownOption.value.filter((info) => {
              info.level === 'AV'
            })
          ]
        }
      ]
    }"
    :chartOptions="{ responsive: true }"
  />
</template>

<style scoped>
#selector-bin {
  margin: 1rem;
  font-size: 3rem;
}
</style>
