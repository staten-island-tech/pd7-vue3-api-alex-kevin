<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
const props = defineProps({
  errorCode: Number
})

/* const errorPath = computed(() => {
  return `/error/${props.errorCode}`
}) */
</script>

<template>
  <h2>Error: {{ props.errorCode }}</h2>
  <p>It seems we've encountered an error.</p>
  <RouterLink to="/">
    <button>Return Home</button>
  </RouterLink>
</template>
