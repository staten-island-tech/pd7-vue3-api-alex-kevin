<script>
<<<<<<< HEAD
import { ref, onMounted } from 'vue'
import { Chart as ChartJS, Title, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
=======
import { defineComponent, ref, onMounted } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
>>>>>>> parent of 4672f62 (finished the chart)
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend)

export default defineComponent({
  name: 'App',
  components: {
    Bar
  },
<<<<<<< HEAD

  data() {
    return {
      loaded: false,
      levelG: [],
      levelC: [],
      levelAVG: [],
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

  data() {
    return {
      labels: [
        'Accurate thermometer not provided in refrigerated or hot holding equipment.',
        'Food Protection Certificate not held by supervisor of food operations.',
        'Non-food contact surface…nd underneath the unit.',
        'Plumbing not properly in…t functioning properly.',
        'Evidence of mice or live… and/or non-food areas.'
      ],
      datasets: [
        {
          data: [10, 20, 30, 40, 50],
          backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
        }
      ],
      option: {
        title: { display: true, position: 'bottom', text: 'ViolationCodes' }
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
=======
  setup() {
    const data = ref({
      labels: ['A', 'C', 'AVG'],
      datasets: [
        {
          data: [40, 20, 12],
          label: ['Hygiene level'],
          backgroundColor: ['#85c9fa', '#1373d6', '#102e45'],
          borderColor: ['rgb(66, 191, 245)', 'rgb(15, 209, 255)', 'rgb(39, 196, 186)'],
          borderWidth: 4
>>>>>>> parent of 4672f62 (finished the chart)
        }
      ]
    })

    const options = ref({
      responsive: true
    })

    onMounted(() => {
      const ctx = document.getElementById('chart').getContext('2d')
      new ChartJS(ctx, {
        type: 'bar',
        data: data.value,
        options: options.value
      })
    })
    return {
      data,
      options
    }
  }
})
</script>

<template>
<<<<<<< HEAD
  <h1>School Cleanliness Level</h1>
  <Bar v-if="loaded" :data="data" :options="options" />
  <!-- <chartjs-doughnut
    v-bind:labels="labels"
    v-bind:datasets="datatsets"
    v-bind:option="option"
  ></chartjs-doughnut> -->
</template>

<style scoped>
h1 {
  font-size: 5rem;
  text-align: center;
  margin: 1%;
<<<<<<< HEAD
  animation: heading 5s infinite;
}

@keyframes heading {
  0% {
    color: rgb(124, 218, 0);
  }
  25% {
    color: rgb(19, 217, 75);
  }
  50% {
    color: rgb(0, 128, 117);
  }
  75% {
    color: rgb(98, 177, 193);
  }
  100% {
    color: blue;
  }
=======
>>>>>>> parent of 97b8f19 (adding some animations)
}
</style>
=======
  <h1>statistics page</h1>
  <Bar :data="data" :options="options" />
</template>

<style scoped></style>
>>>>>>> parent of 4672f62 (finished the chart)
