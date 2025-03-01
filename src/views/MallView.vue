<template>
  <div class="mall-view">
    <Swiper />
    <div class="header">
      <div class="item" v-for="item in linksUrl">
        <img :src="item.src" alt="">
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="tmp">
      <div class=""></div>
      <div class=""></div>
    </div>
    <TabGoods />
    <button class="mall-cart">
    </button>
    <BackToTop />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Swiper from '@/components/Swiper.vue';
import TabGoods from '@/components/TabGoods.vue';
import BackToTop from '@/components/BackToTop.vue';
const links = ref([
  {
    id: 1,
    title: '冻干咖啡',
    src: '../assets/m0.png'
  },
  {
    id: 2,
    title: '挂耳咖啡',
    src: '../assets/m1.png'
  }, {
    id: 3,
    title: '咖啡液',
    src: '../assets/m2.png'
  }, {
    id: 4,
    title: '咖啡豆',
    src: '../assets/m3.png'
  }, {
    id: 5,
    title: '胶囊咖啡',
    src: '../assets/m4.png'
  }
])
const linksUrl = computed(() => {
  return links.value.map(item => ({
    ...item,
    src: new URL(item.src, import.meta.url).href
  }))
})
</script>

<style scoped>
.header {
  display: flex;
  gap: var(--p-m-g);
  justify-content: space-between;
  padding: var(--p-m-g);
  margin: var(--p-m-g);
  border-radius: var(--p-m-g);
  text-align: center;
  background-color: #fff;
}

.header img {
  width: 40px;
}

.tmp {
  display: flex;
  gap: var(--p-m-g);
  margin: var(--p-m-g);
}

.tmp div {
  flex: 1;
  height: 10rem;
  background-color: #fff;
  border-radius: var(--p-m-g);
  background-image: url('@/assets/logo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.tab-goods {
  margin: var(--p-m-g);
}

.mall-cart {
  position: fixed;
  right: 2rem;
  bottom: 16rem;
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 50%;
  background-image: url('@/assets/bag.png');
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 var(--p-m-g) rgba(0, 0, 0, 0.1);
}

.back-to-top {
  position: fixed;
  bottom: 10rem;
  right: 2rem;
}
</style>