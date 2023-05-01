<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <NavigationBar style="z-index: 1" />
  <RouterView />
</template>

<style scoped></style>
