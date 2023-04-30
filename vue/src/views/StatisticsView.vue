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
      labels: ['A', 'February', 'March', 'April'],
      datasets: [{ data: [40, 20, 12, 50] }]
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
  <h1>statistics page</h1>
  <Bar :data="data" :options="options" />
</template>

<style scoped></style>
