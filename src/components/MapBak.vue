<template>
  <div class="map">
    <!-- YI6BZ-MTZW4-HYFUC-F42DP-MK7MQ-3GBRU -->
    <tlbs-map class="tlbs-map" ref="map" api-key="YI6BZ-MTZW4-HYFUC-F42DP-MK7MQ-3GBRU" :center="center" :zoom="zoom"
      :control="control" @click="onClick" @dragend="onDragend">
      <tlbs-multi-marker :geometries="geometries" :styles="styles" :options="options" />
    </tlbs-map>
    <button class="pos" @click.stop="setMapCenter">
      <span class="iconfont icon-location2"></span>
    </button>
  </div>
</template>

<script setup>
import { ref, useTemplateRef, onMounted, inject } from 'vue'
import src from '@/assets/logo-small.png';
const map = useTemplateRef('map')
// const center = ref({ lat: 25.2710, lng: 110.3143 });
const props = defineProps(['center', 'geometries'])
// const center = ref({});
const zoom = ref(15);
const control = ref({
  scale: false,
  zoom: false,
  rotation: false
})

const styles = ref({
  marker: {
    width: 20,
    height: 25,
    anchor: { x: 10, y: 25 },
    src,
  },
})
const options = ref({
  minZoom: 5,
  maxZoom: 15,
})
const onClick = (e) => {
  console.log('map click');
  console.log(e, map.value, props.center);
};
const onDragend = (e) => {
  console.log('map drag');
  console.log(e, map.value.center);
}
const setMapCenter = () => {
  console.log('btn setCenter');
  center.value = { lat: 20.2710, lng: 112.3143 }
}

onMounted(() => {
  console.log('map mounted', map.value);
  // center.value = props.center;
})

</script>

<style scoped>
.map {
  position: relative;
  background-color: #fff;
}

.tlbs-map {
  width: 100%;
  height: 100%;
}

.pos {
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  background-color: rgb(255, 255, 255, 1);
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1001;
}
</style>