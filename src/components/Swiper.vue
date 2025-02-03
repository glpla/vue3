<template>
  <div class="swiper">
    <swiper-container loop="true" pagination="true" autoplay-delay="3000">
      <swiper-slide>
        <img loading="lazy" :src='img' alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy" src='/xh.jpg' alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy" src='https://cdn.pixabay.com/photo/2019/10/30/16/22/message-4589929_640.jpg' alt="">
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import img from '@/assets/panda.png';
import { register } from 'swiper/element/bundle';
register();
</script>

<style scoped>
.swiper {
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #fff;
}

swiper-container,
swiper-slide {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

swiper-container::part(bullet-active) {
  background-color: #fff;
}
</style>