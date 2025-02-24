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
      <div class="item" v-for="item in locs" :key="item">
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
import Map from '@/components/Map.vue';
import Switch from '@/components/Switch.vue';
import Tabbar from '@/components/Tabbar.vue';
import { apiKey, keyword, radius } from '@/assets/config/tbl';
const axios = inject('axios');
const currentTab = ref(0);
const locs = ref([
  {
    "id": "1765361061766493899",
    "title": "瑞幸咖啡(胜和广场店)",
    "address": "广东省东莞市胜和路胜和商住广场A座一层大堂",
    "tel": "",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.021058,
      "lng": 113.74849
    },
    "_distance": 341.19,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  },
  {
    "id": "3372697213968464134",
    "title": "瑞幸咖啡(盈锋中心店)",
    "address": "广东省东莞市胜和体育路26号盈锋中心1栋一层大堂",
    "tel": "",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.021181,
      "lng": 113.75628
    },
    "_distance": 463.13,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  },
  {
    "id": "11946679672493798412",
    "title": "瑞幸咖啡(尚书银座商务公寓店)",
    "address": "广东省东莞市东莞市道鸿福路100号尚书银座1幢116室1号",
    "tel": "",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.013007,
      "lng": 113.753635
    },
    "_distance": 873.67,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  },
  {
    "id": "3190288109658265820",
    "title": "瑞幸咖啡(南城印象汇店)",
    "address": "广东省东莞市鸿福路90号东莞南城印象汇一层1127号",
    "tel": "",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.014615,
      "lng": 113.745974
    },
    "_distance": 900.1,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  },
  {
    "id": "6547077330904273153",
    "title": "瑞幸咖啡(创意产业中心店)",
    "address": "广东省东莞市莞太路34-A区3号楼",
    "tel": "4000100100",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.021912,
      "lng": 113.742777
    },
    "_distance": 934.21,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  },
  {
    "id": "1185483303661290556",
    "title": "瑞幸咖啡(南城莱蒙店)",
    "address": "广东省东莞市鸿福路88号莱蒙商业中心一层104号",
    "tel": "",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.015522,
      "lng": 113.744446
    },
    "_distance": 946.07,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  },
  {
    "id": "14910365715777641222",
    "title": "瑞幸咖啡",
    "address": "广东省东莞市银丰路2号嘉荣购物广场(银丰店)",
    "tel": "",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.01946,
      "lng": 113.742393
    },
    "_distance": 972.38,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  },
  {
    "id": "2049493828898145559",
    "title": "瑞幸咖啡(南城中盛商务大厦店)",
    "address": "广东省东莞市东莞市道中盛商务大厦108号1栋一层107-108室",
    "tel": "",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.0126,
      "lng": 113.756453
    },
    "_distance": 1017.42,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  },
  {
    "id": "15574718306709915943",
    "title": "瑞幸咖啡(华凯广场店)",
    "address": "广东省东莞市元美路华凯广场B幢一层大堂",
    "tel": "",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.0129,
      "lng": 113.74591
    },
    "_distance": 1054.26,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  },
  {
    "id": "8685746581155527282",
    "title": "瑞幸咖啡(汇峰中心G栋大堂店)",
    "address": "广东省东莞市东莞市道汇峰路1号汇峰中心1号楼231室底商",
    "tel": "",
    "category": "娱乐休闲:咖啡厅",
    "type": 0,
    "location": {
      "lat": 23.025293,
      "lng": 113.761507
    },
    "_distance": 1120.27,
    "ad_info": {
      "adcode": 441900,
      "province": "广东省",
      "city": "东莞市",
      "district": "东莞市"
    }
  }
]);
const center = ref({ lat: 23.02067, lng: 113.75179 });
const geometries = ref([])
const tabs = [
  { title: '附近', keyword: 'nearby', path: '' },
  { title: '常用门店', keyword: 'common', path: '' }
]
const switchs = ref([
  { title: '门店自提' },
  { title: '送货上门' },
])

onMounted(() => {
  // axios.get(`/map-api/ws/location/v1/ip?ip=&key=${apiKey}`)
  //   .then(res => {
  //     console.log('res', res);

  //     center.value = res.data.result.location
  //     axios.get(`/map-api/ws/place/v1/search?boundary=nearby(${center.value.lat},${center.value.lng},${radius})&keyword=${keyword}&page_size=10&page_index=1&key=${apiKey}`)
  //       .then(res => {
  //         console.log('res', res.data.data);

  //         locs.value = res.data.data.map(item => ({
  //           ...item,
  //           title: item.title.replace(/瑞幸咖啡\(/, '').replace(/\)/, ''),
  //           open: '08:30 - 21:30'
  //         }))
  //         geometries.value = res.data.data.map(item => ({
  //           styleId: 'marker',
  //           position: item.location,
  //           content: item.title
  //         }));
  //       })
  //   })
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