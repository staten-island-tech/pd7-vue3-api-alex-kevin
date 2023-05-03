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
      borough: '',
      brooklyn: [],
      queens: [],
      manhattan: [],
      statenIsland: [],
      bronx: [],
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
  methods: {
    loadedTrue() {
      this.loaded = true
    },
    select(e) {
      let click = e.target
      this.borough = click.outerText
      if (this.borough == 'Queens') {
        this.levelG = this.queens.filter((info) => info.level === 'G')
        this.levelC = this.queens.filter((info) => info.level === 'C')
        this.levelAVG = this.queens.filter((info) => info.level === 'A')
        this.data.datasets[0].data = [this.levelG.length, this.levelC.length, this.levelAVG.length]
        this.loaded = false
      } else if (this.borough == 'Manhattan') {
        this.levelG = this.manhattan.filter((info) => info.level === 'G')
        this.levelC = this.manhattan.filter((info) => info.level === 'C')
        this.levelAVG = this.manhattan.filter((info) => info.level === 'A')
        this.data.datasets[0].data = [this.levelG.length, this.levelC.length, this.levelAVG.length]
        this.loaded = false
      } else if (this.borough == 'Staten Island') {
        this.levelG = this.statenIsland.filter((info) => info.level === 'G')
        this.levelC = this.statenIsland.filter((info) => info.level === 'C')
        this.levelAVG = this.statenIsland.filter((info) => info.level === 'A')
        this.data.datasets[0].data = [this.levelG.length, this.levelC.length, this.levelAVG.length]
        this.loaded = false
      } else if (this.borough == 'Bronx') {
        this.levelG = this.bronx.filter((info) => info.level === 'G')
        this.levelC = this.bronx.filter((info) => info.level === 'C')
        this.levelAVG = this.bronx.filter((info) => info.level === 'A')
        this.data.datasets[0].data = [this.levelG.length, this.levelC.length, this.levelAVG.length]
        this.loaded = false
      } else if (this.borough == 'Brooklyn') {
        this.levelG = this.brooklyn.filter((info) => info.level === 'G')
        this.levelC = this.brooklyn.filter((info) => info.level === 'C')
        this.levelAVG = this.brooklyn.filter((info) => info.level === 'A')
        this.data.datasets[0].data = [this.levelG.length, this.levelC.length, this.levelAVG.length]
        this.loaded = false
      }
      setTimeout(this.loadedTrue, 500)
    }
  },

  async mounted() {
    try {
      let response = await fetch('https://data.cityofnewyork.us/resource/9hxz-c2kj.json?').then(
        async (res) => {
          const data = await res.json()
          this.brooklyn = data.filter((info) => info.borough === 'Brooklyn')
          this.manhattan = data.filter((info) => info.borough === 'Manhattan')
          this.queens = data.filter((info) => info.borough === 'Queens')
          this.bronx = data.filter((info) => info.borough === 'Bronx')
          this.statenIsland = data.filter((info) => info.borough === 'Staten Island')
          this.levelG = this.brooklyn.filter((info) => info.level === 'G')
          this.levelC = this.brooklyn.filter((info) => info.level === 'C')
          this.levelAVG = this.brooklyn.filter((info) => info.level === 'A')
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
  <label for="graphs">Choose a graph:</label>

  <select id="doughtnut-graph" onchange="">
    <option @click="select" value="Brooklyn">Brooklyn</option>
    <option @click="select" value="Queens">Queens</option>
    <option @click="select" value="Bronx">Bronx</option>
    <option @click="select" value="Manhattan">Manhattan</option>
    <option @click="select" value="Staten Island">Staten Island</option>
  </select>
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
