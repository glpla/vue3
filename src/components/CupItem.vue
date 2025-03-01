<template>
  <div class="cup-item">
    <img :src="lc" alt="">
    <div class="desc">Lorem ipsum dolor sit amet..</div>
    <div class="labels warn f-s-s">
      <span class="label">gl</span>
      <span class="label">sh</span>
      <span class="label">gz!</span>
    </div>
    <div class="price f-s-m f-b warn">&yen;88.8</div>
    <div class="tips">
      <span class="warn">预估到手&nbsp;</span>
      <span class="f-b">&yen;66.6</span>
      <span class="iconfont icon-guanyu_o f-s-s"></span>
    </div>
    <div class="">
      <span class="f-s-s">已售卖 88888+ 件</span>
    </div>
  </div>
</template>

<script setup>
import lc from '@/assets/cup.jpg';
</script>

<style scoped>
.cup-item {
  position: relative;
  background-color: #fff;
  border-radius: var(--p-m-g);
  overflow: hidden;
}

.cup-item>div {
  margin-bottom: var(--p-m-g);
  padding: 0 var(--p-m-g);
}

.cup-item img {
  width: 100%;
  aspect-ratio: 16/9;
}

.labels {
  display: flex;
  gap: calc(var(--p-m-g)/2);
}

.labels .label {
  background-color: var(--warn-color-light);
  padding: 0 calc(var(--p-m-g)/2);
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--main-color);
  color: #fff;
}
</style>