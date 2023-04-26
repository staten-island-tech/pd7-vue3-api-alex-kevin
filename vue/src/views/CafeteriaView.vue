<script setup>
/* const props = defineProps({
  data: { type: Object, required: false }
}) */
</script>

<template>
  <h3>test cafeteria page</h3>
  <!-- <p>{{ props.data }}</p> -->
  <h1>{{ $route.params.data }}</h1>
  <h2>{{ $route.params.data.schoolname }}</h2>
  <p>{{ $route.params.data.violationdescription }}</p>
  <p>{{ $route.params.data.level }}</p>
  <p>{{ $route.params.data.zipcode }}</p>
</template>
