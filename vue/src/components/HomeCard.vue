<script setup>
import router from '@/router'
const props = defineProps({
  title: String,
  description: String,
  imgURL: String,
  linkURL: String,
  clickable: Boolean
})
</script>

<template>
  <div
    class="home-card"
    :class="clickable ? 'clickable' : ''"
    @click="router.push({ path: linkURL })"
  >
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.home-card {
  border-radius: 50px;
  background: #eff0eb;
  box-shadow: 20px 20px 60px #cbccc8, -20px -20px 60px #ffffff;
  border-color: #85c9fa;
  border-width: 0.65rem;
  border-style: solid;
  padding: 2.5rem;
  margin: 6rem;
  transition: all 0.5s;
}

.home-card:hover {
  scale: 1.05;
}

h2 {
  font-size: 4rem;
}

p {
  font-size: 2.25rem;
}

img {
  object-fit: contain;
  z-index: 1;
}

.clickable {
  cursor: pointer;
}
</style>
