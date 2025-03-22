<script setup>
</script>

<template>
  <div class="bread">
    <div v-for="(item, index) in $route.matched" :key="index">{{ item.name }}/</div>
  </div>
</template>

<style scoped>
.bread {
  padding: 0 10px;
  color: #fff;
  display: flex;
  flex-direction: row-reverse;
  line-height: 5vh;
  text-transform: capitalize;
}
</style>