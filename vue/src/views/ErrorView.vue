<script setup>
import {RouterLink} from 'vue-router'
const props = defineProps({
    errorCode: Number,
})
</script>

<template>
    <h2>Error: {{ errorCode }}</h2>
    <p>It seems we've encountered and error.</p>
      <RouterLink to="/">
        <button>Return Home</button>
      </RouterLink>
</template>