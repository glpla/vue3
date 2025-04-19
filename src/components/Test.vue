<template>
  <div class="test">
    <ComTab :tabs :sel-tab="selTab"></ComTab>
    <div>{{ currentTab }}</div>
    <!-- <Upload /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Upload from './Upload.vue';
import ComTab from './ComTab.vue';
const tabs = ['首页', '设置', '帮助'];
const currentTab = ref('首页');
const selTab = (tab) => {
  currentTab.value = tab;
}
</script>

<style scoped></style>