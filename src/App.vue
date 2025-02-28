<script setup>
import AppNav from './components/AppNav.vue';
</script>

<template>
  <router-view class="p-b-10"></router-view>
  <AppNav v-if="$route.meta.showNav" class="w app-nav" />
</template>

<style scoped>
.app-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.p-b-10 {
  background-color: #fff;
}
</style>
