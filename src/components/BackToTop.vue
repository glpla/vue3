<template>
  <div class="back-to-top">
    <button @click="back2top">
      <span class="iconfont icon-zhiding_o"></span>
    </button>
  </div>
</template>

<script setup>
const back2top = () => {
  window.scrollTo({
    top: 0,
    // behavior: 'smooth'
  })
}
</script>

<style scoped>
.back-to-top {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-shadow: 0 0 var(--p-m-g) rgba(0, 0, 0, 0.1);
}
</style>