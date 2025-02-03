<template>
  <header class="header" ref="header">header</header>
  <div class="test"></div>
  <div class="test"></div>
  <div class="test"></div>
  <div class="test"></div>
  <div class="test"></div>
  <div class="test"></div>
  <div class="test"></div>
  <div class="test"></div>
  <div class="test"></div>
  <div class="test"></div>
</template>

<script setup>
import { useTemplateRef, onMounted, onUnmounted } from 'vue'
const header = useTemplateRef('header')
console.log(header.value);

const fn = () => {
  header.value.classList.toggle('fixed', window.scrollY > 500)
  console.log(window.scrollY);

}

onMounted(() => {
  window.addEventListener('scroll', fn)
})

onUnmounted(() => {
  window.removeEventListener('scroll', fn)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}

.header.fixed {
  border-bottom: 1px solid #000;
}

.test {
  height: 100vh;
}
</style>