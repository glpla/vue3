<template>
  <div class="location-view">
    <header>
      <Switch :switchs="switchs" />
      <Map class="map" :center="center" :geometries="geometries"></Map>
      <Tabbar :tabs="tabs" />
    </header>
    <div class="list">
      <!-- <div class="item">
        <h4>桂林高新万达广场（No.A1115）</h4>
        <div class="desc">
          <span class="iconfont icon-ditu_dingwei_o f-s-m"></span>
          <p>距您163m | 七星区穿山东路43号高新万达广场1F层JY-CD-006</p>
        </div>
        <div class="desc">
          <span class="iconfont icon-shijian_o f-s-m"></span>
          <p class="info">08:30 - 21:30 <span>打样</span> <span>常用门店</span></p>
        </div>
        <span class="iconfont icon-guanyu_o about f-s-b"></span>
      </div> -->
      <div class="item" v-for="item in locs" :key="item">
        <h4 class="m-b-1">{{ item.title }}</h4>
        <div class="desc">
          <span class="iconfont icon-ditu_dingwei_o f-s-m"></span>
          <p>距您{{ item._distance.toFixed(0) }}m | {{ item.address }}</p>
        </div>
        <div class="desc">
          <span class="iconfont icon-shijian_o f-s-m"></span>
          <p class="info">{{ item.open }} <span>打样</span> <span>常用门店</span></p>
        </div>
        <span class="iconfont icon-guanyu_o about f-s-b"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import Map from '@/components/Map.vue';
import Switch from '@/components/Switch.vue';
import Tabbar from '@/components/Tabbar.vue';
import { apiKey, keyword, radius } from '@/assets/config/tbl';
const axios = inject('axios');
const locs = ref([]);
const center = ref({})
const geometries = ref([])
const tabs = [
  { title: '附近', keyword: 'nearby' },
  { title: '常用门店', keyword: 'common' }
]
const switchs = ref([
  { title: '门店自提' },
  { title: '送货上门' },
])

onMounted(() => {
  axios.get(`/map-api/ws/location/v1/ip?ip=&key=${apiKey}`)
    .then(res => {
      center.value = res.data.result.location
      axios.get(`/map-api/ws/place/v1/search?boundary=nearby(${center.value.lat},${center.value.lng},${radius})&keyword=${keyword}&page_size=10&page_index=1&key=${apiKey}`)
        .then(res => {
          locs.value = res.data.data.map(item => ({
            ...item,
            title: item.title.replace(/瑞幸咖啡\(/, '').replace(/\)/, ''),
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
.location-view {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  padding: 0;
}

.switch {
  height: 6rem;
}

.map {
  height: 50vh;
}

.tabbar {
  padding: 0 var(--p-m-g);
  height: 6rem;
}

.list {
  flex: 1;
  margin: var(--p-m-g);
  overflow-y: auto;
}

.item {
  position: relative;
}

.list .item:not(:last-child) {
  margin-bottom: calc(2*var(--p-m-g));
}

.desc {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--p-m-g);
}

.info span:first-child {
  background-color: var(--dark-bg-color);
  color: #fff;
  padding: 0 8px;
  margin: 0 8px;
}

.info span:last-child {
  border: 1px solid var(--main-color);
  padding: 0 8px;
  margin: 0 8px;
  color: var(--main-color);
  background-color: var(--third-bg-color);
  border-radius: 10px;
}

.about {
  position: absolute;
  right: 0;
  top: 0;
}
</style>