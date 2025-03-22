<script setup>
import { ref, onMounted, inject } from 'vue';
import AppNav from './components/AppNav.vue';
const isHide = ref(false)
const axios = inject('axios')
onMounted(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? isHide.value = true : isHide.value = false
  })
  // axios.get('/api/getCoffee')
  //   .then(res => {
  //     console.log(res);
  //   })
})

</script>

<template>
  <router-view class=" rw p-b-10"></router-view>
  <AppNav v-if="$route.meta.showNav" class="w app-nav" :class="{ 'hide': isHide && $route.path == '/menu' }" />
</template>

<style scoped>
.bread {
  position: fixed;
  left: 0;
  top: 0;
  background: #000;
}

.app-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  transition: .5s;
  z-index: 99;
}

.rw {
  background-color: var(--second-bg-color);
}

.hide {
  bottom: -100%;
}
</style>
