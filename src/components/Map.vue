<template>
  <div class="map">
    <tlbs-map class="tlbs-map" ref="mapRef" api-key="YI6BZ-MTZW4-HYFUC-F42DP-MK7MQ-3GBRU" :center="mapStore.center"
      :zoom="zoom" :control="control" @map_inited="onMapInited" @dragend="onDragEnd">
      <tlbs-multi-marker ref="markerRef" :geometries="mapStore.geometries" :styles="styles" :options="options"
        @click="onMarkerClick" />
    </tlbs-map>
    <button class="pos" @click.stop="setMapCenter">
      <span class="iconfont icon-location2"></span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import src from '@/assets/logo.svg'
import { useMapStore } from '@/stores/map'
const mapStore = useMapStore()
const mapRef = ref(null)
const markerRef = ref(null)
// const center = ref({ lat: 23.02067, lng: 113.75179 });
const zoom = ref(15);
const control = ref({
  scale: false,
  zoom: false,
  rotation: false
})

const onClick = (e) => {
  console.log('map click');
  console.log(e);
};
const onDragEnd = (e) => {
  console.log('map dragend');
  const newCenter = mapRef.value.map.getCenter();
  console.log('New center:', newCenter.lat, newCenter.lng);
  mapStore.center = { lat: newCenter.lat, lng: newCenter.lng };
  // mapStore.center.lat = newCenter.lat;
  // mapStore.center.lng = newCenter.lng;
  mapStore.updateMarker()
}

const setMapCenter = () => {
  // mapRef.value.map.setCenter({ lat: 30.91799, lng: 110.397027 });
  mapStore.center = { lat: 23.02067, lng: 113.75179 }
  console.log(mapStore.center.value);
}

// mapRef.value.map.on('click', onClick);
const onMarkerClick = (e) => {
  console.log('marker click');
  console.log(e);
};

// const geometries = ref([
//   { styleId: 'marker', position: { "lat": 23.021058, "lng": 113.74849 } },
//   { styleId: 'marker', position: { "lat": 23.021181, "lng": 113.75628 } },
//   { styleId: 'marker', position: { "lat": 23.013007, "lng": 113.753635 } },
//   { styleId: 'marker', position: { "lat": 23.014615, "lng": 113.745974 } },
//   { styleId: 'marker', position: { "lat": 23.021912, "lng": 113.742777 } },
//   { styleId: 'marker', position: { "lat": 23.015522, "lng": 113.744446 } },
//   { styleId: 'marker', position: { "lat": 23.01946, "lng": 113.742393 } },
//   { styleId: 'marker', position: { "lat": 23.0126, "lng": 113.756453 } },
//   { styleId: 'marker', position: { "lat": 23.0129, "lng": 113.74591 } },
//   { styleId: 'marker', position: { "lat": 23.025293, "lng": 113.761507 } },
// ])

const styles = ref({
  marker: {
    width: 20,
    height: 25,
    anchor: { x: 10, y: 30 },
    src: src
  },
})

const options = ref({
  minZoom: 5,
  maxZoom: 15,
})

const onMapInited = () => {
  // 地图加载完成后，可以获取地图实例，调用地图实例方法
  console.log('map', mapRef.value);
  console.log('marker', markerRef.value);
};

// const markers = ref([
//   {
//     "id": "1765361061766493899",
//     "title": "瑞幸咖啡(胜和广场店)",
//     "address": "广东省东莞市胜和路胜和商住广场A座一层大堂",
//     "tel": "",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.021058,
//       "lng": 113.74849
//     },
//     "_distance": 341.19,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   },
//   {
//     "id": "3372697213968464134",
//     "title": "瑞幸咖啡(盈锋中心店)",
//     "address": "广东省东莞市胜和体育路26号盈锋中心1栋一层大堂",
//     "tel": "",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.021181,
//       "lng": 113.75628
//     },
//     "_distance": 463.13,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   },
//   {
//     "id": "11946679672493798412",
//     "title": "瑞幸咖啡(尚书银座商务公寓店)",
//     "address": "广东省东莞市东莞市道鸿福路100号尚书银座1幢116室1号",
//     "tel": "",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.013007,
//       "lng": 113.753635
//     },
//     "_distance": 873.67,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   },
//   {
//     "id": "3190288109658265820",
//     "title": "瑞幸咖啡(南城印象汇店)",
//     "address": "广东省东莞市鸿福路90号东莞南城印象汇一层1127号",
//     "tel": "",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.014615,
//       "lng": 113.745974
//     },
//     "_distance": 900.1,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   },
//   {
//     "id": "6547077330904273153",
//     "title": "瑞幸咖啡(创意产业中心店)",
//     "address": "广东省东莞市莞太路34-A区3号楼",
//     "tel": "4000100100",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.021912,
//       "lng": 113.742777
//     },
//     "_distance": 934.21,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   },
//   {
//     "id": "1185483303661290556",
//     "title": "瑞幸咖啡(南城莱蒙店)",
//     "address": "广东省东莞市鸿福路88号莱蒙商业中心一层104号",
//     "tel": "",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.015522,
//       "lng": 113.744446
//     },
//     "_distance": 946.07,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   },
//   {
//     "id": "14910365715777641222",
//     "title": "瑞幸咖啡",
//     "address": "广东省东莞市银丰路2号嘉荣购物广场(银丰店)",
//     "tel": "",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.01946,
//       "lng": 113.742393
//     },
//     "_distance": 972.38,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   },
//   {
//     "id": "2049493828898145559",
//     "title": "瑞幸咖啡(南城中盛商务大厦店)",
//     "address": "广东省东莞市东莞市道中盛商务大厦108号1栋一层107-108室",
//     "tel": "",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.0126,
//       "lng": 113.756453
//     },
//     "_distance": 1017.42,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   },
//   {
//     "id": "15574718306709915943",
//     "title": "瑞幸咖啡(华凯广场店)",
//     "address": "广东省东莞市元美路华凯广场B幢一层大堂",
//     "tel": "",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.0129,
//       "lng": 113.74591
//     },
//     "_distance": 1054.26,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   },
//   {
//     "id": "8685746581155527282",
//     "title": "瑞幸咖啡(汇峰中心G栋大堂店)",
//     "address": "广东省东莞市东莞市道汇峰路1号汇峰中心1号楼231室底商",
//     "tel": "",
//     "category": "娱乐休闲:咖啡厅",
//     "type": 0,
//     "location": {
//       "lat": 23.025293,
//       "lng": 113.761507
//     },
//     "_distance": 1120.27,
//     "ad_info": {
//       "adcode": 441900,
//       "province": "广东省",
//       "city": "东莞市",
//       "district": "东莞市"
//     }
//   }
// ]
// )
onMounted(() => {
  mapStore.updateMarker()
})

</script>

<style scoped>
.map {
  position: relative;
  height: 50vh;
}

.tlbs-map {
  width: 100%;
  height: 100%;
}

.pos {
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  background-color: rgb(255, 255, 255, 1);
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1001;
}
</style>