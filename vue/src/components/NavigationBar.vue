<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <button>Home</button>
      </RouterLink>
      <RouterLink to="/statistics">
        <button>Statistics</button>
      </RouterLink>
      <RouterLink to="/explore">
        <button>Explore</button>
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100vw;
  height: 6rem;
  font-size: 10rem;
  background-color: #1373d6;
  color: white;
}

nav {
  display: flex;
  align-content: space-evenly;
  justify-content: space-evenly;
}

button {
  background-color: #eff0eb;
  border-style: none;
  padding: 0.33rem;
  border-radius: 0.5rem;
  /* box-shadow: 10px 10px 30px #1062b6, -10px -10px 30px #1684f6; */
}
</style>
