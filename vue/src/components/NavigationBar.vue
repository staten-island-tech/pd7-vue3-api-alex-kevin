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
      <RouterLink to="/search">
        <button>Search</button>
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100vw;
  height: 5vh;
  font-size: 10rem;
  background-color: rgb(232, 51, 130);
  color: white;
}

nav {
  display: flex;
  align-content: space-evenly;
  justify-content: space-evenly;
}
</style>
