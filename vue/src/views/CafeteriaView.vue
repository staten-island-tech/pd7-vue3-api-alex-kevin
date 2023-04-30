<script setup>
const props = defineProps({
  entityid: String,
  schoolname: String,
  borough: String,
  number: String,
  street: String,
  address_line_1: String,
  address_line_2: String,
  zipcode: String,
  lastinspection: String,
  permittee: String,
  inspectiondate: String,
  code: String,
  violationdescription: String,
  level: String,
  latitude: String,
  longitude: String,
  communityboard: String,
  councildistrict: String,
  bin: String,
  bbl: String,
  nta: String
})

function undefinedCatch(value) {
  if (value === '' || value === null || value === undefined) {
    return 'N/A'
  }
}
</script>

<template>
  <h3>test cafeteria page</h3>

  <h1>{{ $route.params.entityid }}</h1>
  <h2>{{ $route.params.schoolname }}</h2>
  <p>{{ $route.params.violationdescription }}</p>
  <p>{{ $route.params.level }}</p>
  <p>{{ $route.params.zipcode }}</p>
</template>
