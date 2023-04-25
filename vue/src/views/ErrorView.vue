<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h2>Error: {{ $route.params.errorCode }}</h2>
  <p>It seems we've encountered an error.</p>
  <RouterLink to="/">
    <button>Return Home</button>
  </RouterLink>
</template>
