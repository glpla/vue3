<template>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
const axios = inject('axios');
const apiKey = "YI6BZ-MTZW4-HYFUC-F42DP-MK7MQ-3GBRU";
window.cb = function (res) {
  console.log(res)
}
onMounted(() => {
  const script = document.createElement('script');
  script.src = `https://apis.map.qq.com/ws/location/v1/ip?key=${apiKey}&output=jsonp&callback=cb`;
  document.body.appendChild(script);
})
</script>
<style scoped></style>