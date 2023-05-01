<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h2>Error: {{ $route.params.errorCode }}</h2>
    <p>It seems we've encountered an error.</p>
    <RouterLink to="/">
      <button>Return Home</button>
    </RouterLink>
  </div>
</template>

<style scoped>
h2 {
  font-size: 4.5rem;
  margin: 1rem auto;
}
p {
  font-size: 2.5rem;
  margin: 1rem auto;
}

button {
  background-color: #eff0eb;
  border-style: none;
  padding: 0.33rem;
  border-radius: 0.5rem;
  transition: all 0.5s;
  /* box-shadow: 10px 10px 30px #1062b6, -10px -10px 30px #1684f6; */
  font-size: 2rem;
  margin: 1rem auto;
  border-color: #85c9fa;
  border-width: 0.4rem;
  border-style: solid;
}

button:hover {
  background-color: #85c9fa;
}

div {
  margin: 2rem;
}
</style>
