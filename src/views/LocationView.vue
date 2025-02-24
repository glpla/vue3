<template>
  <div class="location-view">
    <header>
      <Switch :switchs="switchs" />
      <Map></Map>
      <!-- <Tabbar :tabs="tabs" /> -->
      <div class="tab-box">
        <button @click.stop="currentTab = 0">
          <h3 class="tab-item" :class="{ 'active': currentTab === 0 }">附近</h3>
        </button>
        <button @click.stop="currentTab = 1">
          <h3 class="tab-item" :class="{ 'active': currentTab === 1 }">常用门店</h3>
        </button>
      </div>
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
      <div class="item" v-for="item in mapStore.locs" :key="item">
        <h4 class="m-b-1">{{ item.title }}</h4>
        <div class="desc">
          <span class="iconfont icon-ditu_dingwei_o f-s-m"></span>
          <p>距您{{ item._distance.toFixed(0) }}m | {{ item.address }}</p>
        </div>
        <div class="desc">
          <span class="iconfont icon-shijian_o f-s-m"></span>
          <p class="info">{{ item.open }} 09:30-22:30<span>打样</span> <span>常用门店</span></p>
        </div>
        <button>
          <span class="iconfont icon-guanyu_o about f-s-b"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { useMapStore } from '@/stores/map';
import Map from '@/components/Map.vue';
import Switch from '@/components/Switch.vue';
import Tabbar from '@/components/Tabbar.vue';
const mapStore = useMapStore();
const currentTab = ref(0);
const tabs = [
  { title: '附近', keyword: 'nearby', path: '' },
  { title: '常用门店', keyword: 'common', path: '' }
]
const switchs = ref([
  { title: '门店自提' },
  { title: '送货上门' },
])

onMounted(() => {
  mapStore.updateMarker()
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

.tab-box {
  display: flex;
  gap: var(--p-m-g);
  padding: var(--p-m-g);
}

.tab-item {
  position: relative;
  line-height: 2.4;
}

.tab-item.active::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 60%;
  height: 4px;
  background-color: var(--main-color);
  transform: translateX(-50%);
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