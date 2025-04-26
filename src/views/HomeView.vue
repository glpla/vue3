<script setup>
import { defineAsyncComponent, ref, computed, onMounted, useTemplateRef, onUnmounted } from 'vue'
import Swiper from '@/components/Swiper.vue';
import Theme from '@/components/Theme.vue';
import MainNav from '@/components/MainNav.vue';
import BackToTop from '@/components/BackToTop.vue';
import Title from '@/components/Title.vue';
import Promotion from '@/components/Promotion.vue';
import Welfare from '@/components/Welfare.vue';

// const AsyncGoods = defineAsyncComponent(() => import('@/components/TabGoods.vue'))
// const AsyncCup = defineAsyncComponent(() => import('@/components/TabCup.vue'))
import AsyncGoods from '@/components/TabGoods.vue'
import AsyncCup from '@/components/TabCup.vue'
const imgs = ref(['deer0.jpg', 'deer1.jpg', 'deer2.jpg', 'deer3.jpg', 'deer4.jpg', 'deer5.jpg', 'deer6.jpg'])
const imgsUrl = computed(() => {
  return imgs.value.map(img => new URL(`../assets/swiper/${img}`, import.meta.url).href)
})
const currentTab = ref('随享瑞幸')
const tabs = {
  "随享瑞幸": AsyncGoods,
  "颜值水杯": AsyncCup
}
const tabBox = useTemplateRef('tab-box')
const isShowBackToTop = ref(false)
const toCoupon = () => {
  console.log('to coupon');
  alert('to coupon')
}
const toWelfare = () => {
  console.log('to welfare');
  alert('to welfare')
}
const showBackToTop = () => {
  isShowBackToTop.value = window.scrollY > 500
}

const stickyTabBox = () => {
  const rect = tabBox.value.getBoundingClientRect()
  if (rect.top <= 0) {
    tabBox.value.classList.add('sticky')
  } else {
    tabBox.value.classList.remove('sticky')
  }
}
onMounted(() => {
  window.addEventListener('scroll', stickyTabBox)
  window.addEventListener('scroll', showBackToTop)
})

onUnmounted(() => {
  window.removeEventListener('scroll', stickyTabBox)
  window.removeEventListener('scroll', showBackToTop)
})
</script>

<template>
  <div class="home-view">
    <!-- <Theme /> -->
    <Swiper :imgs="imgsUrl" />
    <MainNav class="m-1" />
    <div class="section">
      <Title :handle="toCoupon">
        <h3>我的优惠专区</h3>
      </Title>
      <Promotion />
    </div>
    <div class="section">
      <Title :handle="toWelfare">
        <h3>福利中心</h3>
      </Title>
      <Welfare />
    </div>
    <div class="section tab-box" ref="tab-box">
      <div class="nav">
        <button v-for="(_, tab) in tabs" @click="currentTab = tab" :key="tab" class="nav-item"
          :class="{ 'active': currentTab === tab }">
          <h3>{{ tab }}</h3>
        </button>
      </div>
      <button class="more" @click="$router.replace('/mall')">更多 &gt;</button>
    </div>
    <div class="tab-cont">
      <component :is="tabs[currentTab]" class="tab"></component>
    </div>
    <BackToTop :class="{ 'active': isShowBackToTop }" />
  </div>
</template>

<style scoped>
.home-view {
  position: relative;
}

.theme {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 99;
  color: var(--bg-color);
}

.section {
  /* background-color: #fff; */
  /* border-radius: var(--p-m-g); */
  margin: var(--p-m-g);
}

.nav {
  display: flex;
  gap: var(--p-m-g);
}

.tab-box {
  display: flex;
  justify-content: space-between;
  z-index: 90;
  transition: 0.5s;
  line-height: var(--title-bar-height);
}

.tab-box.sticky {
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: var(--p-m-g) 0;
}

.tab-cont {
  margin: var(--p-m-g);
  padding-bottom: var(--app-nav-h);
}

.nav-item {
  position: relative;
}

.nav-item h3 {
  color: var(--txt-color);
}

.more {
  color: var(--txt-color);
}

.nav-item.active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 60%;
  height: 4px;
  background-color: var(--main-color);
}

html[data-theme='dark'] .tab-box.sticky h3,
html[data-theme='dark'] .tab-box.sticky .more {
  color: var(--bg-color);
}

.back-to-top {
  position: fixed;
  bottom: -10rem;
  right: 2rem;
  transition: 0.5s;
}

.back-to-top.active {
  bottom: 10rem;
}
</style>
