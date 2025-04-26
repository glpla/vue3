<template>
  <div class="loading">loading...</div>
</template>

<script setup>

</script>

<style scoped>
.loading {
  position: fixed;
  inset: 0;
  background-color: rgb(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
</style>