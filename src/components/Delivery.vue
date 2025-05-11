<template>
  <div class="delivery">
    <button class="item" :class="{ active: isTakeout }" @click="isTakeout = true">自提</button>
    <button class="item" :class="{ active: !isTakeout }" @click="isTakeout = false">外送</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isTakeout = ref(true)
</script>

<style scoped>
.delivery {
  display: flex;
  line-height: 3rem;
  background-color: var(--second-bg-color);
  border-radius: 2rem;
}

.item {
  height: 3rem;
  padding: 0 var(--p-m-g);
  border-radius: 2rem;
}

.active {
  background-color: var(--main-color);
  color: #fff;
}
</style>