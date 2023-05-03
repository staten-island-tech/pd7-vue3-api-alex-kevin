<script setup>
import HomeCard from '../components/HomeCard.vue'
</script>

<template>
  <HomeCard
    title="Doughnut Chart"
    description="Explore the statistics of the violation descriptions of school cafeterias."
    :clickable="true"
    linkURL="/doughnut-chart"
  />
  <HomeCard
    title="Bar Chart"
    description="Explore the statistics of the violation codes of school cafeterias."
    :clickable="true"
    linkURL="/bar-chart"
  />
</template>
