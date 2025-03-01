<template>
  <div class="welfare">
    <swiper-container grabCursor="true" keyboard-enabled="true" spaceBetween="10" slidesPerView="2.2">
      <swiper-slide class="cont">
        <h3>关注公众号</h3>
        <div><span class="iconfont icon-alarm"></span> 周周上新提醒</div>
      </swiper-slide>
      <swiper-slide class="cont">
        <h3>#喝咖啡挑战</h3>
        <div>再喝一杯达成</div>
      </swiper-slide>
      <swiper-slide class="cont">
        <h3>本月咖啡星人</h3>
        <div>马上冲榜</div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
register();
</script>

<style scoped>
.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 12rem;
  padding-left: var(--p-m-g);
  border-radius: var(--p-m-g);
  background-color: var(--warn-color-light);
}

.cont div {
  color: var(--warn-color);
}

.cont .iconfont {
  font-size: 1.6rem;
}
</style>