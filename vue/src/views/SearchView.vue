<script setup>
import { toRaw, ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const searchQuery = ref('')
const searchCategory = ref('')
const cafeteriaData = ref('')

async function getDataFromAPI(url) {
  try {
    let response = await fetch(url)
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status)
    } else {
      let jsonData = await response.json()
      cafeteriaData.value = toRaw(jsonData)
    }
  } catch (error) {
    console.log(error)
    this.$router.push(`/error/${error}`)
  }
}
onMounted(() => {
  getDataFromAPI(
    'https://data.cityofnewyork.us/resource/5ery-qagt.json?$query=SELECT%0A%20%20%60entityid%60%2C%0A%20%20%60schoolname%60%2C%0A%20%20%60number%60%2C%0A%20%20%60street%60%2C%0A%20%20%60city%60%2C%0A%20%20%60state%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60lastinspection%60%2C%0A%20%20%60permittee%60%2C%0A%20%20%60inspectiondate%60%2C%0A%20%20%60ptet%60%2C%0A%20%20%60site_type%60%2C%0A%20%20%60level%60%2C%0A%20%20%60code%60%2C%0A%20%20%60violationdescription%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60communityboard%60%2C%0A%20%20%60councildistrict%60%2C%0A%20%20%60censustract%60%2C%0A%20%20%60bin%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60nta%60%2C%0A%20%20%60borocode%60'
  )
})

/* const props = defineProps({
  cafeteria: Object
}) */
</script>

<template>
  <p>search interface</p>
  <div id="search-bar">
    <label for="select-search-category">Select Search Category:</label>
    <select name="select-search-category" id="select-search-category" v-model="searchCategory">
      <option>schoolname</option>
      <option>violationdescription</option>
      <option>level</option>
      <option>zipcode</option>
    </select>
    <input v-model="searchQuery" placeholder="Enter Search Query" />
  </div>
  <table>
    <thead>
      <tr>
        <th>School Name</th>
        <th>Violation Description</th>
        <th>Level</th>
        <th>Zipcode</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-if="searchQuery === ''"
        v-for="cafeteria in cafeteriaData"
        @click="this.$router.push({ name: 'Cafeteria', params: { data: toRaw(cafeteria) } })"
      >
        <td>{{ cafeteria.schoolname }}</td>
        <td>{{ cafeteria.violationdescription }}</td>
        <td>{{ cafeteria.level }}</td>
        <td>{{ cafeteria.zipcode }}</td>
      </tr>
      <tr
        v-else
        v-for="cafeteria in cafeteriaData.filter((item) =>
          item.schoolname.toLowerCase().includes(searchQuery.toLowerCase())
        )"
      >
        <td>{{ cafeteria.schoolname }}</td>
        <td>{{ cafeteria.violationdescription }}</td>
        <td>{{ cafeteria.level }}</td>
        <td>{{ cafeteria.zipcode }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
th,
td {
  border-color: black;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  padding: 5px;
  font-size: 1.5rem;
}

tr {
  width: 100%;
  display: table-row;
}
tr:hover {
  background-color: rgb(215, 215, 215);
}

table {
  display: table;
}
</style>
