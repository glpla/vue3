<template>
  <div class="menu-view">
    <div class="loc-box">
      <span class="iconfont icon-didiandingwei_o"></span>
      <span>桂林万达广场店 | 0.5km</span>
      <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
    </div>
    <div class="tab-box">
      <button v-for="(val, tab) in tabs" :key="tab" class="tab-item f-s-m" :class="{ 'active': currentTab === tab }"
        @click="currentTab = tab">{{ tab }}
      </button>
    </div>
    <div class="tab-cont">
      <component :is="tabs[currentTab]" />
    </div>
    <Cart class="w cart" v-if="cartStore.cart.length" :class="{ 'pos': $route.meta.showNav }" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import Cart from '@/components/Cart.vue';
import AsyncGoods from '@/components/Goods.vue'
import AsyncVip from '@/components/Vip.vue'
import AsyncRank from '@/components/Rank.vue'
import AsyncFavorite from '@/components/Favorite.vue'
const cartStore = useCartStore()

const currentTab = ref('经典菜单')
const tabs = {
  "经典菜单": AsyncGoods,
  "会员卡": AsyncVip,
  "年度封神榜": AsyncRank,
  "我的常点": AsyncFavorite,
}
</script>

<style scoped>
.loc-box {
  display: flex;
  align-items: center;
  gap: calc(var(--p-m-g)/2);
  padding: var(--p-m-g);
}

.tab-box {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--p-m-g);
  background-color: #fff;
  line-height: 4rem;
  margin-bottom: calc(2*var(--p-m-g));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.tab-cont {
  padding: var(--p-m-g);
}

.tab-item {
  position: relative;
}

.tab-item.active::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 60%;
  height: 4px;
  background-color: var(--main-color);
}

.cart {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  transition: 0.5s;
}

.cart.pos {
  bottom: var(--app-nav-h);
}
</style>