<!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"> -->

<script setup>
const ctx = document.getElementById('myChart')

const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})
</script>

<template>
  <p>statistics page</p>
  <canvas id="myChart"></canvas>
</template>
