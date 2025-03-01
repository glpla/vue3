<script setup>
import { ref, onMounted } from 'vue';
import AppNav from './components/AppNav.vue';
const isHide = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? isHide.value = true : isHide.value = false
  })

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
