<template>
  <div class="favorite">
    <img :src="img" alt="">
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
const img = ref('')
onMounted(() => {
  fetch('https://png.pngtree.com/png-vector/20250119/ourmid/pngtree-young-deer-in-a-floral-setting-symbolizing-innocence-and-nature-png-image_15277297.png', {
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
.favorite {
  text-align: center;
}

.favorite img {
  width: 300px;
}
</style>