<template>
  <div class="com-tab">
    <div v-for="(tab, index) in props.tabs" :key="index" @click="props.selTab(tab)">{{ tab }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  selTab: {
    type: Function,
    default: () => { }
  },
  tabs: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.com-tab {
  display: flex;
  gap: var(--p-m-g);
}
</style>