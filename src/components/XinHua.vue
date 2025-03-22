<template>
  <div class="xin-hua">
    <tlbs-map class="tlbs-map" api-key="YI6BZ-MTZW4-HYFUC-F42DP-MK7MQ-3GBRU" :center="center" :zoom="zoom"
      :control="control">
      <tlbs-multi-marker :geometries="geometries" :styles="styles" :options="options" />
    </tlbs-map>
  </div>
</template>

<script setup>
import src from '@/assets/logo-small.png'
// lat 23.060754
// lng 113.580752
const center = { lat: 23.060754, lng: 113.580752 };
const zoom = 15;
const control = {
  scale: false,
  zoom: false,
  rotation: false
}
const geometries = [
  { styleId: 'marker', position: { "lat": 23.060754, "lng": 113.580752 } },
]

const styles = {
  marker: {
    width: 40,
    height: 40,
    anchor: { x: 10, y: 30 },
    // src: src
  },
}

const options = {
  minZoom: 5,
  maxZoom: 15,
}

</script>

<style scoped>
.xin-hua {
  height: 50vh;
}

.tlbs-map {
  width: 100%;
  height: 100%;
}
</style>