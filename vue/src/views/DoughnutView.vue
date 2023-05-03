<script setup>
import { ref, computed, onMounted } from 'vue'
import DoughnutChart from '../components/DoughnutChart.vue'
const selectedBorough = ref('')
const cafeteriaData = ref('')
let loaded = false
async function getDataFromAPI(url) {
  try {
    let response = await fetch(url)
    if (response.status < 200 || response.status > 299) {
      console.log(response.status)
      throw Error(response.status)
    } else {
      cafeteriaData.value = await response.json()
      console.log(cafeteriaData.value)
    }
  } catch (error) {
    console.log(error)
    this.$router.push(`/error/${error}`)
  }
}
onMounted(() => {
  getDataFromAPI(
    'https://data.cityofnewyork.us/resource/9hxz-c2kj.json?$query=SELECT%0A%20%20%60entityid%60%2C%0A%20%20%60schoolname%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60number%60%2C%0A%20%20%60street%60%2C%0A%20%20%60address_line_1%60%2C%0A%20%20%60address_line_2%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60lastinspection%60%2C%0A%20%20%60permittee%60%2C%0A%20%20%60inspectiondate%60%2C%0A%20%20%60code%60%2C%0A%20%20%60violationdescription%60%2C%0A%20%20%60level%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60communityboard%60%2C%0A%20%20%60councildistrict%60%2C%0A%20%20%60censustract%60%2C%0A%20%20%60bin%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60nta%60'
  )
})
const computedData = computed(() => {
  let filteredData = ''
  if (selectedBorough.value === 'All Boroughs') {
    filteredData = cafeteriaData
  } else {
    filteredData = cafeteriaData.filter((info) => info.borough === selectedBorough.value)
  }
  return {
    labels: [
      'Live roaches present in facility food and or non-food areas.',
      'Food not protected from contamination',
      'Food protection certification not held by supervisor of food operations',
      'Evidence of mice present in food',
      'Other'
    ],
    datasets: [
      {
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(144, 238, 144)',
          'rgb(155,155,155)'
        ],
        hoverOffset: 35,
        data: [40, 20, 80, 10, 10]
      }
    ]
  }
})
</script>

<template class="All">
  <h1>Violation Descriptions</h1>
  <Bar v-if="loaded" :data="data" :options="options" />
  <canvas id="myChart"></canvas>
</template>
