<template>
  <div class="menu-view">
    <div class="header">
      <Switch :switchs="switchs"></Switch>
      <Search class="search" @click="$router.push('/search')" />
    </div>
    <div class="loc-box" @click="$router.push('/location')">
      <span class="iconfont icon-didiandingwei_o"></span>
      <span><span class="f-b">{{ city.title }}</span> | {{ city.distance }}m</span>
      <button>&gt;</button>
    </div>
    <div class="links">
      <RouterLink class="link f-b" v-for="(item, ind) in tabs" :key="item.id" :to="item.path">{{ item.title }}
      </RouterLink>
    </div>
    <div class="sub-view p-1">
      <RouterView v-slot="{ Component, route }">
        <KeepAlive>
          <Component :is="Component" :key="route.fullPath" v-if="route.meta.keepalive"></Component>
        </KeepAlive>
        <Component :is="Component" :key="route.fullPath" v-if="!route.meta.keepalive"></Component>
      </RouterView>
    </div>
    <KeepAlive>
      <Cart class="w cart" v-if="cartStore.carts.length" :class="{ 'pos': $route.meta.showNav }"></Cart>
    </KeepAlive>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { useCartStore } from '@/stores/cart'
import { apiKey, keyword, radius } from '@/assets/config/tbl';
import Switch from '@/components/Switch.vue';
import Search from '@/components/Search.vue';
import Cart from '@/components/Cart.vue';
const cartStore = useCartStore()
const axios = inject('axios');
const city = ref({})
// lat 23.060754
// lng 113.580752
const center = ref({})
const locs = ref({})
const geometries = ref({})
const tabs = [
  { ind: 0, title: '经典菜单', path: '/menu/goods', keyword: 'classic' },
  { ind: 1, title: '会员卡', path: '/menu/vip', keyword: 'member' },
  { ind: 2, title: '年度封神榜', path: '/menu/rank', keyword: 'rank' },
  { ind: 3, title: '我的常点', path: '/menu/favorite', keyword: 'favor' },
]

const switchs = ref([
  { title: '自提' },
  { title: '外送' },
])

const getCenter = (res) => {
  console.log(res);
  center.value = res.data.result.location

}
const getCenterJsonp = (res) => {
  console.log(res);

}
onMounted(() => {
  axios.get(`/map-api/ws/location/v1/ip?ip=&key=${apiKey}`)
    .then(res => {
      center.value = res.data.result.location || { lat: 23.060754, lng: 113.580752 };
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
  padding: 0 var(--p-m-g);
  height: 5rem;
}

.tabbar {
  position: sticky;
  top: 5rem;
  padding: 0 var(--p-m-g);
  background-color: #fff;
  line-height: var(--title-bar-height);
  margin-bottom: calc(2*var(--p-m-g));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
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

.sub-view {
  background-color: #fff;
  padding-bottom: var(--app-nav-h);
}

.links {
  position: sticky;
  top: 5rem;
  background-color: #fff;
  margin-bottom: calc(2*var(--p-m-g));
  display: flex;
  gap: var(--p-m-g);
  justify-content: space-around;
  line-height: var(--title-bar-height);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.link {
  position: relative;
}

/* router style */
/* .nav-color {
  color: var(--main-color);
} */

/* .exact-nav-color {
  color: var(--main-color);
} */
.exact-nav-color::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 60%;
  height: 4px;
  background-color: var(--main-color);
}
</style>