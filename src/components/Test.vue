<template>
  <div class="test">
    <Demo tmp='100' />
    <Tabbar :tabs="tabs">
      <button>
        <span></span>
      </button>
    </Tabbar>>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Demo from './Demo.vue';
import Tabbar from './Tabbar.vue';
const tabs = ref([{ title: '附近', keyword: 'nearby' },
{ title: '常用门店', keyword: 'common' }])
</script>

<style scoped></style>