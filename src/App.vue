<script setup>
import AppNav from './components/AppNav.vue';
</script>

<template>

  <router-view class="rw"></router-view>
  <AppNav v-if="!$route.meta.showNav" class="w app-nav" />
</template>

<style scoped>
.rw {
  padding-bottom: 10rem;
}

.app-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
