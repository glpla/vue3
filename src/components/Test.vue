<template>
  <div class="test">
    <div v-for="tab in tabs" :key="tab.id" @click="word = tab.data">{{ tab.label }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const tabs = ref([{
  id: 1,
  label: '软工3班',
  data: '20240203.json',
}, {
  id: 2,
  label: '软工4班',
  data: '20240204.json',
}])
const word = ref(tabs.value[0].data)
console.log(word.value);
watch(word, (newValue, oldValue) => {
  console.log(newValue);
  fetch(`https://glpla.github.io/utils/data/rank/${newValue}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
}, { immediate: true })
</script>

<style lang="scss" scoped></style>