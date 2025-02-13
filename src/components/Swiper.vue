<template>
  <div class="swiper">
    <swiper-container loop="true" pagination="true" autoplay-delay="3000" grabCursor="true" keyboard-enabled="true">
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20241112/pngtree-a-hole-in-brown-kraft-paper-with-gold-coffee-beans-spilling-image_16560004.jpg'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20240929/pngtree-front-view-of-delicious-coffee-in-a-white-cup-and-roasted-image_16289758.jpg'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fw800/background/20240428/pngtree-a-coffee-mug-and-coffee-beans-on-a-wooden-table-image_15671339.jpg'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20231103/pngtree-coffee-cup-image_13797073.png'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20230719/pngtree-top-view-3d-rendering-of-a-pile-of-brown-coffee-beans-image_3703823.jpg'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20240722/pngtree-a-cup-of-coffee-and-an-open-book-placed-on-a-photo-image_16083936.jpg'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20230702/pngtree-d-render-of-coffee-granules-spilling-on-a-white-surface-against-image_3732767.jpg'
          alt="">
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
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