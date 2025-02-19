<template>
  <div class="menu-view p-b-10">
    <div class="header">
      <Delivery />
      <Search class="search" @click="$router.push('/search')" />
    </div>
    <div class="loc-box" @click="$router.push('/location')">
      <span class="iconfont icon-didiandingwei_o"></span>
      <span>{{ city.title }} | {{ city.distance }}m</span>
      <button><span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span></button>
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
import { ref, onMounted, inject } from 'vue'
import { useCartStore } from '@/stores/cart'
import { apiKey, keyword, radius } from '@/assets/config/tbl';
import Delivery from '@/components/Delivery.vue';
import Search from '@/components/Search.vue';
import Cart from '@/components/Cart.vue';
import AsyncGoods from '@/components/Goods.vue'
import AsyncVip from '@/components/Vip.vue'
import AsyncRank from '@/components/Rank.vue'
import AsyncFavorite from '@/components/Favorite.vue'
const cartStore = useCartStore()
const axios = inject('axios');
const city = ref({})
const center = ref({})
const locs = ref({})
const geometries = ref({})
const currentTab = ref('经典菜单')
const tabs = {
  "经典菜单": AsyncGoods,
  "会员卡": AsyncVip,
  "年度封神榜": AsyncRank,
  "我的常点": AsyncFavorite,
}
onMounted(() => {
  axios.get(`/map-api/ws/location/v1/ip?ip=&key=${apiKey}`)
    .then(res => {
      center.value = res.data.result.location
      axios.get(`/map-api/ws/place/v1/search?boundary=nearby(${center.value.lat},${center.value.lng},${radius})&keyword=${keyword}&page_size=10&page_index=1&key=${apiKey}`)
        .then(res => {
          city.value = { title: res.data.data[0].title.replace(/瑞幸咖啡\(/, '').replace(/\)/, ''), distance: res.data.data[0]._distance.toFixed(0) }
          locs.value = res.data.data.map(item => ({
            ...item,
            open: '08:30 - 21:30'
          }))
          geometries.value = res.data.data.map(item => ({
            styleId: 'marker',
            position: item.location,
            content: item.title
          }));
        })
    })
})
</script>

<style scoped>
.header {
  position: sticky;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  gap: var(--p-m-g);
  height: 5rem;
  background-color: #fff;
  padding: 0 var(--p-m-g);
  z-index: 1;
}

.header .search {
  flex: 1;
}

.loc-box {
  display: flex;
  align-items: center;
  gap: calc(var(--p-m-g)/2);
  padding: var(--p-m-g);
  background-color: #fff;
}

.tab-box {
  position: sticky;
  top: 5rem;
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
  background-color: #fff;
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