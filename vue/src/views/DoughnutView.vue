<script>
import { ref, onMounted } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import Chart from 'chart.js/auto'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default {
  async mounted() {
    if ((this.loaded = true)) {
      const ctx = document.getElementById('myChart')

      const data = {
        labels: [
          'Live roaches present in facility food and or non-food areas.',
          'Food not protected from contamination',
          'Food protection certification not held by supervisor of food operations',
          'Evidence of mice present in food'
        ],
        datasets: [
          {
            data: [19, 18, 11, 80],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(144, 238, 144)'
            ],
            hoverOffset: 35
          }
        ]
      }

      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data
      })
      // }else if() =>{},
    }
  }
}
</script>

<template class="All">
  <h1>Violation Descriptions</h1>
  <label for="graphs">Choose a graph: </label>

  <select id="doughtnut-graph" onchange="">
    <option @click="select" value="Brooklyn">Brooklyn</option>
    <option @click="select" value="Queens">Queens</option>
    <option @click="select" value="Bronx">Bronx</option>
    <option @click="select" value="Manhattan">Manhattan</option>
    <option @click="select" value="Staten Island">Staten Island</option>
  </select>
  <Bar v-if="loaded" :data="data" :options="options" />
  <canvas id="myChart"></canvas>
</template>

<style scoped>
h1 {
  font-size: 5rem;
  text-align: center;
  margin-top: 1rem;
  animation: heading 5s infinite;
}
label {
  margin-left: 80rem;
}
.graphs {
  text-align: center;
}
@keyframes heading {
  0% {
    color: rgb(124, 218, 0);
  }
  25% {
    color: rgb(19, 217, 75);
  }
  50% {
    color: green;
  }
  75% {
    color: rgb(98, 177, 193);
  }
  100% {
    color: blue;
  }
}
</style>
