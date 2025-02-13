<template>
  <div class="rank">
    <img :src="img" alt="">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const img = ref('')
onMounted(() => {
  fetch('https://png.pngtree.com/png-vector/20241115/ourmid/pngtree-cute-running-deer-png-image_14430526.png', {
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
.rank {
  text-align: center;
}

.rank img {
  width: 300px;
}
</style>