<script setup>
import { onMounted } from 'vue'
async function getDataFromAPI(url) {
  try {
    let response = await fetch(url)
  } catch (error) {
    console.log(error)
    alert(error)
  }
}
onMounted(() => {
  getDataFromAPI(
    'https://data.cityofnewyork.us/resource/5ery-qagt.json?$query=SELECT%0A%20%20%60entityid%60%2C%0A%20%20%60schoolname%60%2C%0A%20%20%60number%60%2C%0A%20%20%60street%60%2C%0A%20%20%60city%60%2C%0A%20%20%60state%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60lastinspection%60%2C%0A%20%20%60permittee%60%2C%0A%20%20%60inspectiondate%60%2C%0A%20%20%60ptet%60%2C%0A%20%2C20%60site_type%60%2C%0A%20%20%60level%60%2C%0A%20%20%60code%60%2C%0A%20%20%60violationdescription%60%%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60communityboard%60%2C%0A%20%20%60councildistrict%60%2C%0A%20%20%60censustract%60%2C%0A%20%20%60bin%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60nta%60%2C%0A%20%20%60borocode%60'
  )
})
</script>

<template>
  <p>statistics page</p>
</template>
