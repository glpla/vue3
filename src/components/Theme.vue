<template>
  <div class="theme" @click="setDarkMode">
    <span class="iconfont icon-Sun"></span>
    <div class="dot"></div>
    <span class="iconfont icon-Moon-Star"></span>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue';
const darkMode = ref('light');
const setDarkMode = () => {
  darkMode.value = darkMode.value === 'light' ? 'dark' : 'light';
  // document.documentElement.setAttribute('data-theme', darkMode.value);
  document.documentElement.dataset.theme = darkMode.value;
  localStorage.setItem('theme', darkMode.value);
};
onMounted(() => {
  darkMode.value = localStorage.getItem('theme') || 'light';
  document.documentElement.dataset.theme = darkMode.value;
});
</script>

<style scoped>
.theme {
  display: flex;
  align-items: center;
  border-radius: 3rem;
  justify-content: space-between;
}

.dot {
  position: relative;
  width: 4rem;
  height: 2.4rem;
  background-color: #eee;
  border-radius: 3rem;
  padding: 0 var(--p-m-g);
}

.dot::before {
  content: '';
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 2rem;
  height: 2rem;
  background: var(--second-color);
  border-radius: 50%;
  transition: .4s;
}

html[data-theme='dark'] .dot::before {
  left: calc(100% - 2.2rem);
}

.iconfont {
  color: #fff;
}
</style>