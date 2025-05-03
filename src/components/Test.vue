<template>
  <div class="test">
    <RouterLink :to="{ name: 'goods' }">goods</RouterLink><br>
    <div v-for="item in $route.matched">{{ item.path }}</div>
  </div>
</template>

<script setup>
</script>

<style scoped></style>