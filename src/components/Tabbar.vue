<template>
  <div class="tabbar" ref="tabbar">
    <div class="tab">
      <button v-for="(item, ind) in tabs" @click="currentInd = ind" :key="ind" class="tab-item"
        :class="{ 'active': currentInd === ind }">
        <h3>{{ item.title }}</h3>
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['tabs'])
const currentInd = ref(0)
</script>

<style scoped>
.tabbar {
  display: flex;
  align-items: center;
}

.tab {
  display: flex;
  gap: var(--p-m-g);
  margin-right: auto;
  line-height: 2.4;
}

.tab-item {
  position: relative;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background-color: var(--main-color);
}
</style>