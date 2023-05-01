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
    return 'None'
  } else {
    return value
  }
}
</script>

<template>
  <table>
    <tr>
      <td>
        <p class="label">School Name</p>
        <p class="main">{{ undefinedCatch($route.params.schoolname) }}</p>
      </td>

      <td>
        <p class="label">Violation Level</p>
        <p class="main" style="color: #1373d6; font-weight: 500; font-size: 5rem">
          {{ undefinedCatch($route.params.level) }}
        </p>
      </td>
    </tr>
  </table>

  <table>
    <tr>
      <td>
        <p class="label">Violation Description</p>
        <p class="main">{{ undefinedCatch($route.params.violationdescription) }}</p>
      </td>
    </tr>
  </table>

  <table>
    <tr>
      <td>
        <p class="label">Address</p>
        <p class="main">
          {{ undefinedCatch($route.params.address_line_1) }}
        </p>
        <p class="main">
          {{ undefinedCatch($route.params.address_line_2) }}
        </p>
      </td>
      <td>
        <p class="label">Borough</p>
        <p class="main">{{ undefinedCatch($route.params.borough) }}</p>
      </td>
    </tr>
  </table>

  <table>
    <tr>
      <td>
        <p class="label">Date of Last Inspection</p>
        <p class="main">{{ undefinedCatch($route.params.lastinspection) }}</p>
      </td>
    </tr>
  </table>

  <table>
    <tr>
      <td>
        <p class="label">Permittee</p>
        <p class="main">{{ undefinedCatch($route.params.permittee) }}</p>
      </td>
    </tr>
  </table>
  <table>
    <tr>
      <td>
        <p class="label">Latitude</p>
        <p class="main">{{ undefinedCatch($route.params.latitude) }}</p>
      </td>
      <td>
        <p class="label">Longitude</p>
        <p class="main">{{ undefinedCatch($route.params.longitude) }}</p>
      </td>
    </tr>
  </table>

  <table>
    <tr>
      <td>
        <p class="label">Community Board #</p>
        <p class="main">{{ undefinedCatch($route.params.communityboard) }}</p>
      </td>
      <td>
        <p class="label">Council District #</p>
        <p class="main">{{ undefinedCatch($route.params.councildistrict) }}</p>
      </td>
      <td>
        <p class="label">BIN</p>
        <p class="main">{{ undefinedCatch($route.params.bin) }}</p>
      </td>
      <td>
        <p class="label">BBL</p>
        <p class="main">{{ undefinedCatch($route.params.bbl) }}</p>
      </td>
      <td>
        <p class="label">NTA</p>
        <p class="main">{{ undefinedCatch($route.params.nta) }}</p>
      </td>
    </tr>
  </table>
</template>

<style scoped>
td {
  border-color: black;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  padding: 5px;
  font-size: 2rem;
}

table {
  table-layout: auto;
  border-collapse: collapse;
  width: 100%;
}

.label {
  font-size: 1.5rem;
  font-weight: 600;
}

.main {
  font-size: 2.5rem;
  font-weight: 400;
}

td:hover {
  background-color: rgba(133, 201, 250, 0.4);
}
</style>
