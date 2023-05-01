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
  name: 'Bar graph',
  components: {
    Bar
  },
  data() {
    return {
      loaded: false,
      data: {
        labels: ['G', 'A', 'C'],
        datasets: [
          {
            label: ['Amount of school'],
            backgroundColor: ['#85c9fa', '#1373d6', '#102e45'],
            borderColor: ['rgb(66, 191, 245)', 'rgb(15, 209, 255)', 'rgb(39, 196, 186)'],
            borderWidth: 4
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  },

  async mounted() {
    try {
      let response = await fetch('https://data.cityofnewyork.us/resource/9hxz-c2kj.json?').then(
        async (res) => {
          const data = await res.json()
          this.levelG = data.filter((info) => info.level === 'G')
          this.levelC = data.filter((info) => info.level === 'C')
          this.levelAVG = data.filter((info) => info.level === 'A')
          this.data.datasets[0].data = [
            this.levelG.length,
            this.levelC.length,
            this.levelAVG.length
          ]
          this.loaded = true
        }
      )
    } catch (error) {
      console.log(error)
    }
  },
  async mounted() {
    console.log('Component mounted.')
    const ctx = document.getElementById('myChart')

    const data = {
      labels: [
        'No facilities available to sanitize utensils and equipments',
        'Food not protected from contamination',
        'Food protection certification not held by supervisor of food operations',
        'Evidence of mice present in food'
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          hoverOffset: 4
        }
      ]
    }

    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data
    })
  }
}
</script>

<template>
  <h1>School Cleanliness Level</h1>
  <label for="graphs">Choose a graph:</label>

  <select id="doughtnut-graph">
    <option value="Brooklyn">Brooklyn</option>
    <option value="Queens">Queens</option>
    <option value="Bronx">Bronx</option>
    <option value="Manhattan">Manhattan</option>
    <option value="Staten Island">Staten Island</option>
  </select>
  <Bar v-if="loaded" :data="data" :options="options" />
  <canvas id="myChart" width="400" height="400"></canvas>
</template>

<style scoped>
h1 {
  font-size: 5rem;
  text-align: center;
  margin: 1%;
  animation: heading 5s infinite;
}
#doughtnut-graph {
  font-size: 2rem;
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
