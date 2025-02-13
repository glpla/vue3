<template>
  <div class="vip">
    <img :src="img" alt="">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const img = ref('')
onMounted(() => {
  fetch('https://png.pngtree.com/recommend-works/png-clipart/20250101/ourmid/pngtree-cartoon-deer-standing-png-image_14982249.png', {
    headers: {
      'Accept': 'image/png'
    }
  })
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      img.value = url;
      console.log(img.value);

    })
    .catch(error => console.error('Error:', error));
})
</script>

<style scoped>
.vip {
  text-align: center;
}

.vip img {
  width: 300px;
}
</style>