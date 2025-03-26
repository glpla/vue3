<template>
  <div class="swiper-static">
    <img src="../assets/swiper/swiper0.jpg" alt="" v-show="ind == 0" @error="errImg">
    <img src="../assets/swiper/swiper1.jpg" alt="" v-show="ind == 1" @error="errImg">
    <img src="../assets/swiper/swiper2.jpg" alt="" v-show="ind == 2" @error="errImg">
    <img src="../assets/swiper/swiper3.jpg" alt="" v-show="ind == 3" @error="errImg">
    <img src="../assets/swiper/swiper4.jpg" alt="" v-show="ind == 4" @error="errImg">
    <img src="../assets/swiper/swiper5.jpg" alt="" v-show="ind == 5" @error="errImg">
    <img src="../assets/swiper/swiper6.jpg" alt="" v-show="ind == 6" @error="errImg">
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const ind = ref(0);
let timer;
onMounted(() => {
  timer = setInterval(() => {
    ind.value = (ind.value + 1) % 7;
  }, 3000);
})
onUnmounted(() => {
  timer && clearInterval(timer);
})
const errImg = (event) => {
  console.error('Image failed to load:', event.target.src);
  event.target.src = '@/assets/logo.png';
};
</script>

<style scoped></style>