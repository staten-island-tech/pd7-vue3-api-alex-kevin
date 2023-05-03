<script setup>
import { ref, onMounted, watch } from 'vue'
import BarChart from '../components/BarChart.vue'
const dataArray = ref({
  allBoroughs: [0, 0, 0, 0],
  brooklyn: [0, 0, 0, 0],
  manhattan: [0, 0, 0, 0],
  bronx: [0, 0, 0, 0],
  queens: [0, 0, 0, 0],
  statenIsland: [0, 0, 0, 0]
})
const selectedBorough = ref([])
const cafeteriaData = ref('')
// const computedData = ref('')
let loaded = ref(false)

async function getDataFromAPI(url) {
  try {
    let response = await fetch(url)
    if (response.status < 200 || response.status > 299) {
      console.log(response.status)
      throw Error(response.status)
    } else {
      cafeteriaData.value = await response.json()
    }
  } catch (error) {
    console.log(error)
    this.$router.push(`/error/${error}`)
  }
}
onMounted(() => {
  getDataFromAPI(
    'https://data.cityofnewyork.us/resource/9hxz-c2kj.json?$query=SELECT%0A%20%20%60entityid%60%2C%0A%20%20%60schoolname%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60number%60%2C%0A%20%20%60street%60%2C%0A%20%20%60address_line_1%60%2C%0A%20%20%60address_line_2%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60lastinspection%60%2C%0A%20%20%60permittee%60%2C%0A%20%20%60inspectiondate%60%2C%0A%20%20%60code%60%2C%0A%20%20%60violationdescription%60%2C%0A%20%20%60level%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60communityboard%60%2C%0A%20%20%60councildistrict%60%2C%0A%20%20%60censustract%60%2C%0A%20%20%60bin%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60nta%60'
  ).then(() => {
    for (let i = 0; i < cafeteriaData.value.length; i++) {
      if (cafeteriaData.value[i].level === 'C') {
        if (cafeteriaData.value[i].borough === 'Brooklyn') {
          dataArray.value.brooklyn[0]++
        } else if (cafeteriaData.value[i].borough === 'Queens') {
          dataArray.value.queens[0]++
        } else if (cafeteriaData.value[i].borough === 'Manhattan') {
          dataArray.value.manhattan[0]++
        } else if (cafeteriaData.value[i].borough === 'Bronx') {
          dataArray.value.bronx[0]++
        } else if (cafeteriaData.value[i].borough === 'Staten Island') {
          dataArray.value.statenIsland[0]++
        }
      } else if (cafeteriaData.value[i].level === 'G') {
        if (cafeteriaData.value[i].borough === 'Brooklyn') {
          dataArray.value.brooklyn[1]++
        } else if (cafeteriaData.value[i].borough === 'Queens') {
          dataArray.value.queens[1]++
        } else if (cafeteriaData.value[i].borough === 'Manhattan') {
          dataArray.value.manhattan[1]++
        } else if (cafeteriaData.value[i].borough === 'Bronx') {
          dataArray.value.bronx[1]++
        } else if (cafeteriaData.value[i].borough === 'Staten Island') {
          dataArray.value.statenIsland[1]++
        }
      } else if (cafeteriaData.value[i].level === 'AV') {
        if (cafeteriaData.value[i].borough === 'Brooklyn') {
          dataArray.value.brooklyn[2]++
        } else if (cafeteriaData.value[i].borough === 'Queens') {
          dataArray.value.queens[2]++
        } else if (cafeteriaData.value[i].borough === 'Manhattan') {
          dataArray.value.manhattan[2]++
        } else if (cafeteriaData.value[i].borough === 'Bronx') {
          dataArray.value.bronx[2]++
        } else if (cafeteriaData.value[i].borough === 'Staten Island') {
          dataArray.value.statenIsland[2]++
        }
      } else {
        if (cafeteriaData.value[i].borough === 'Brooklyn') {
          dataArray.value.brooklyn[3]++
        } else if (cafeteriaData.value[i].borough === 'Queens') {
          dataArray.value.queens[3]++
        } else if (cafeteriaData.value[i].borough === 'Manhattan') {
          dataArray.value.manhattan[3]++
        } else if (cafeteriaData.value[i].borough === 'Bronx') {
          dataArray.value.bronx[3]++
        } else if (cafeteriaData.value[i].borough === 'Staten Island') {
          dataArray.value.statenIsland[3]++
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      dataArray.value.allBoroughs[i] =
        dataArray.value.brooklyn[i] +
        dataArray.value.bronx[i] +
        dataArray.value.queens[i] +
        dataArray.value.manhattan[i] +
        dataArray.value.statenIsland[i]
    }
    loaded.value = true
  })
})
/* const computedData = computed(() => {
  return 
}) */
watch(selectedBorough, () => {
  console.log(selectedBorough.value)
})
</script>

<template>
  <h1>Violation Codes</h1>
  <label for="graphs">Select Borough: </label>
  <select id="doughtnut-graph" v-model="selectedBorough">
    <option :value="dataArray.allBoroughs">All Boroughs</option>
    <option :value="dataArray.brooklyn">Brooklyn</option>
    <option :value="dataArray.queens">Queens</option>
    <option :value="dataArray.bronx">Bronx</option>
    <option :value="dataArray.manhattan">Manhattan</option>
    <option :value="dataArray.statenIsland">Staten Island</option>
  </select>
  <BarChart
    v-if="loaded"
    :chartData="{
      labels: ['C', 'G', 'AV', 'None'],
      datasets: [
        {
          label: ['Amount of School Cafeterias'],
          backgroundColor: ['#85c9fa', '#1373d6', '#102e45', 'rgb(15, 126, 80)'],
          borderColor: [
            'rgb(66, 191, 245)',
            'rgb(15, 209, 255)',
            'rgb(39, 196, 186)',
            'rgb(20, 196, 140)'
          ],
          borderWidth: 4,
          data: selectedBorough
        }
      ]
    }"
    :chartOptions="{
      responsive: true
    }"
  />
</template>

<style scoped>
h1 {
  font-size: 5rem;
  margin: 1rem auto;
  display: flex;
  justify-self: center;
}
</style>
