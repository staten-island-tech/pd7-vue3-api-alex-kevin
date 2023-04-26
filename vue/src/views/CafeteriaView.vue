<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>{{ $route.params.data }}</h1>
  <h2>{{ $route.params.data.schoolname }}</h2>
  <p>{{ $route.params.data.violationdescription }}</p>
  <p>{{ $route.params.data.level }}</p>
  <p>{{ $route.params.data.zipcode }}</p>
</template>
