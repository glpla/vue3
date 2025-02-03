<script setup>
import Swiper from '@/components/Swiper.vue';
import { defineAsyncComponent, ref, onMounted, useTemplateRef, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import MainNav from '@/components/MainNav.vue';
import BackToTop from '@/components/BackToTop.vue';
const route = useRoute();

// const AsyncGoods = defineAsyncComponent(() => import('@/components/TabGoods.vue'))
// const AsyncCup = defineAsyncComponent(() => import('@/components/TabCup.vue'))
import AsyncGoods from '@/components/TabGoods.vue'
import AsyncCup from '@/components/TabCup.vue'

const currentTab = ref('随享瑞幸')
const tabs = {
  "随享瑞幸": AsyncGoods,
  "颜值水杯": AsyncCup
}

const tabBox = useTemplateRef('tab-box')

onMounted(() => {
  console.log(tabBox.value);
  window.onscroll = function () {
    const rect = tabBox.value.getBoundingClientRect()
    if (rect.top <= 0) {
      tabBox.value.classList.add('sticky')
    } else {
      tabBox.value.classList.remove('sticky')
    }
  }
})

onUnmounted(() => {
  window.onscroll = null
})
</script>

<template>
  <div class="home-view">
    <Swiper />
    <MainNav class="main-nav" />
    <div class="promotion-box">
      <div class="mb-1 flex">
        <h3>我的优惠专区</h3>
        <button>
          <span>查看全部</span>
          <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
        </button>
      </div>
      <div class="promotion-cont grid">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    <div class="welfare-box">
      <div class="mb-1 flex">
        <h3>福利中心</h3>
        <button>
          <span>查看全部</span>
          <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
        </button>
      </div>
      <div class="welfare-cont grid">
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    <div class="tab-box" ref="tab-box">
      <div class="nav">
        <button v-for="(_, tab) in tabs" @click="currentTab = tab" :key="tab" class="f-s-m nav-item"
          :class="{ 'active': currentTab === tab }">{{ tab }}</button>
      </div>
      <button>
        <span>更多</span>
        <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
      </button>
    </div>
    <div class="tab-cont">
      <component :is="tabs[currentTab]" class="tab"></component>
    </div>
    <BackToTop />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 10rem;
  gap: var(--p-m-g);
}

.main-nav {
  margin: 0 var(--p-m-g) var(--p-m-g);
}

.promotion-box,
.welfare-box {
  margin: var(--p-m-g);
  padding: var(--p-m-g);
  border-radius: var(--p-m-g);
  background-color: #fff;
}

.promotion-cont .item,
.welfare-cont .item {
  /* width: 100%; */
  /* aspect-ratio: 16/9; */
  background-color: var(--second-bg-color);
  border-radius: var(--p-m-g);
}

.promotion-cont .item:first-child {
  grid-row: span 2;
}

.nav {
  display: flex;
  gap: var(--p-m-g);
}

.tab-box {
  display: flex;
  justify-content: space-between;
  padding: var(--p-m-g);
  margin: var(--p-m-g);
  z-index: 90;
  transition: 0.5s;
}

.tab-box.sticky {
  position: sticky;
  top: 0;
  margin: 0;
  background-color: #fff;
}

.tab-cont {
  margin: var(--p-m-g);
  padding: var(--p-m-g);
}

.nav-item {
  position: relative;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 40%;
  height: 4px;
  background-color: var(--main-color);
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
</style>
