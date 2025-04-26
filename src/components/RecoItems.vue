<template>
  <div class="reco-items">
    <div class="item" v-for="(item, ind) in reco" :key="item.id">
      <img class="img" :src="`https://glpla.github.io/utils/${item.img}`" alt="">
      <div class="info">
        <h4 class="title f-s-m">{{ item.title }}</h4>
        <p class="ellipsis">{{ item.desc }}</p>
        <p class="price warn">
          <span class="f-b f-s-m ">&yen;{{ item.price_original }}&nbsp;</span>
          <span>起</span>
        </p>
      </div>
      <button class="btn reco-btn" @click="console.log(item.id)">+</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(['reco'])
</script>

<style scoped>
.reco-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.item .img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}

.item .info {
  flex: 1;
  overflow: hidden;
}

.item .info .price {
  margin-top: 1rem;
}

.item .reco-btn {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  color: #fff;
  border-radius: 50%;
}
</style>