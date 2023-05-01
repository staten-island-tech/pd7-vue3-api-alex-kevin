<script setup>
import HomeCard from '../components/HomeCard.vue'
</script>

<template>
  <HomeCard
    title="About"
    description="Ever wondered how clean your school cafeteria actually is? Well, now you can find out! This website serves as a tool to view the results of sanitary inspections of school cafetertias, and also shows some interesting statistics reguarding the sanitary conditions of school cafeterias."
    :clickable="false"
  />
  <HomeCard
    title="Statistics"
    description="Explore the statistics of school cafeterias' sanitary conditions and how they stack up."
    :clickable="true"
    linkURL="/statistics"
  />
  <HomeCard
    title="Explore"
    description="Looking for a specific school cafeteria? Want to browse through the different school cafeteria sanitary reports? Access all of the school cafeteria sanitary condition reports in the database."
    :clickable="true"
    linkURL="/explore"
  />
</template>
