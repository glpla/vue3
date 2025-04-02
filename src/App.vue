<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
import AppNav from './components/AppNav.vue';
const isHide = ref(false)
const axios = inject('axios')
const handle = () => {
  isHide.value = window.scrollY > 100 ? true : false
}
onMounted(() => {
  window.addEventListener('scroll', handle)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handle)
})

</script>

<template>
  <router-view class="p-b-10"></router-view>
  <AppNav v-if="$route.meta.showNav" class="w app-nav" :class="{ 'hide': isHide && $route.path == '/menu' }" />
</template>

<style scoped>
.app-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  transition: .5s;
  z-index: 99;
}

.hide {
  bottom: -100%;
}
</style>
