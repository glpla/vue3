<template>
  <div class="test">
    <div class="tabs">
      <span class="tab" v-for="(item, ind) in tabs" :key="item.id" @click="selectTab(item.id)"
        :class="{ active: selectedTab === item.id }">{{ item.label }}</span>
    </div>
    <div class="cont">预估到手价：Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, tempora!</div>
    <div>[{"id":0,"label":"满折"},{"id":1,"label":"赠品"}]</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
const selectedTab = ref('cup');
const tabs = [
  { id: 'cup', label: '杯子' },
  { id: 'coffee', label: '咖啡' }
];
const selectTab = (id) => {
  selectedTab.value = id;
};


watch(selectedTab, (newVal, oldVal) => {

}, {
  immediate: true
})
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 10px;
}

.tab {
  cursor: pointer;
}

.tab.active {
  color: red;
}
</style>