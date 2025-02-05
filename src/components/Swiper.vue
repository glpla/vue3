<template>
  <div class="swiper">
    <swiper-container loop="true" pagination="true" autoplay-delay="3000">
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20241124/pngtree-cozy-cup-of-coffee-and-a-book-on-soft-blanket-in-image_16634425.jpg'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20240923/pngtree-a-cup-of-coffee-and-on-table-with-cups-cappuccino-it-image_16242707.jpg'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20210729/pngtree-blue-effect-coffee-cup-real-shot-combined-with-coffee-line-draft-image_753292.jpg'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20240923/pngtree-female-hands-holding-cup-of-coffee-on-wooden-background-cozy-moment-image_16240678.jpg'
          alt="">
      </swiper-slide>
      <swiper-slide>
        <img loading="lazy"
          src='https://png.pngtree.com/thumb_back/fh260/background/20240722/pngtree-a-cup-of-coffee-and-an-open-book-placed-on-a-photo-image_16083936.jpg'
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