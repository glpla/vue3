<template>
  <div class="swiper">
    <swiper-container loop="true" pagination="true" autoplay-delay="3000" grabCursor="true" keyboard-enabled="true">
      <swiper-slide v-for="item in imgs" :key="item">
        <img loading="lazy" :src='item' alt="">
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
const props = defineProps({
  imgs: {
    type: Array,
    default: () => []
  }
})
register();

</script>

<style scoped>
img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

swiper-container::part(bullet) {
  width: 6px;
  height: 6px;
  border-radius: var(--p-m-g);
  background-color: #fff;
  opacity: 0.6;
  transition: 0.4s;
}

swiper-container::part(bullet-active) {
  width: 6px;
  height: 12px;
  border-radius: var(--p-m-g);
  background-color: #fff;
  opacity: 1;
}

swiper-container::part(pagination) {
  width: var(--p-m-g);
  height: 100%;
  top: 0;
  right: var(--p-m-g);
  left: initial;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--p-m-g);
}
</style>