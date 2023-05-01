<script setup>
import { ref, onMounted } from 'vue'
const cafeteriaData = ref('')
async function getDataFromAPI(url) {
  try {
    let response = await fetch(url)
    if (response.status < 200 || response.status > 299) {
      console.log(response.status)
      throw Error(response.status)
    } else {
      cafeteriaData.value = await response.json()
      console.log(cafeteriaData.value)
    }
  } catch (error) {
    console.log(error)
    this.$router.push(`/error/${error}`)
  }
}
onMounted(() => {
  getDataFromAPI(
    'https://data.cityofnewyork.us/resource/9hxz-c2kj.json?$query=SELECT%0A%20%20%60entityid%60%2C%0A%20%20%60schoolname%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60number%60%2C%0A%20%20%60street%60%2C%0A%20%20%60address_line_1%60%2C%0A%20%20%60address_line_2%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60lastinspection%60%2C%0A%20%20%60permittee%60%2C%0A%20%20%60inspectiondate%60%2C%0A%20%20%60code%60%2C%0A%20%20%60violationdescription%60%2C%0A%20%20%60level%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60communityboard%60%2C%0A%20%20%60councildistrict%60%2C%0A%20%20%60censustract%60%2C%0A%20%20%60bin%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60nta%60'
  )
})
</script>

<template>
  <tr>
    <th>School Name</th>
    <th>Violation Description</th>
    <th>Level</th>
    <th>Zipcode</th>
  </tr>
  <tr
    v-for="cafeteria in cafeteriaData"
    :key="cafeteria.entityid"
    @click="
      this.$router.push({
        name: 'Cafeteria',
        params: {
          entityid: cafeteria.entityid,
          schoolname: cafeteria.schoolname,
          borough: cafeteria.borough,
          number: cafeteria.number,
          street: cafeteria.street,
          address_line_1: cafeteria.address_line_1,
          address_line_2: cafeteria.address_line_2,
          zipcode: cafeteria.zipcode,
          lastinspection: cafeteria.lastinspection,
          permittee: cafeteria.permittee,
          inspectiondate: cafeteria.inspectiondate,
          code: cafeteria.code,
          violationdescription: cafeteria.violationdescription,
          level: cafeteria.level,
          latitude: cafeteria.latitude,
          longitude: cafeteria.longitude,
          communityboard: cafeteria.communityboard,
          councildistrict: cafeteria.councildistrict,
          bin: cafeteria.bin,
          bbl: cafeteria.bbl,
          nta: cafeteria.nta
        }
      })
    "
  >
    <td>{{ cafeteria.schoolname }}</td>
    <td>{{ cafeteria.violationdescription }}</td>
    <td>{{ cafeteria.level }}</td>
    <td>{{ cafeteria.zipcode }}</td>
  </tr>
</template>

<style scoped>
th,
td {
  border-color: black;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  padding: 5px;
  font-size: 2rem;
}
th {
  font-weight: 600;
}

td {
  cursor: pointer;
}

tr:hover {
  background-color: rgba(133, 201, 250, 0.4);
}
</style>
