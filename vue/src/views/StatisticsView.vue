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
  }
}
</script>

<template>
  <h1>School Cleanliness Level</h1>
  <Bar v-if="loaded" :data="data" :options="options" />
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
    color: #011f4b;
  }
  25% {
    color: #03396c;
  }
  50% {
    color: #005b96;
  }
  75% {
    color: #6497b1;
  }
  100% {
    color: #b3cde0;
  }
}
</style>
