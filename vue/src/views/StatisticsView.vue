<script>
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
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
  name: 'App',
  components: {
    Bar
  },
  setup() {
    const data = ref({
      labels: ['A', 'C', 'AVG'],
      datasets: [
        {
          data: [40, 20, 12],
          label: ['Hygiene level'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)'
          ],
          borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)'],
          borderWidth: 1
        }
      ]
    })

    const options = ref({
      responsive: true
    })

    onMounted(() => {
      const ctx = document.getElementById('chart')
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
  <h1>statistics page</h1>
  <Bar :data="data" :options="options" />
</template>

<style scoped></style>
