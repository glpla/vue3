<template>
  <div class="test">
    <div> {{ msg.title }} - {{ msg.dis }}m</div>
    <div> {{ com.title }} - {{ com.dis }}m</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const msg = ref({
  title: '瑞幸咖啡(桂林一中店)',
  dis: 594.94
})
const com = computed(() => {
  return {
    title: msg.value.title.replace('瑞幸咖啡(', '').replace(/\)/, ''),
    dis: msg.value.dis.toFixed(0)
  }
})
</script>

<style scoped></style>