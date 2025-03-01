<template>
  <div class="tab-cup grid">
    <CupItem v-for="item in 6" :key="item"></CupItem>
  </div>
</template>

<script setup>
import CupItem from '@/components/CupItem.vue';
</script>

<style scoped>
.tab-cup.grid {
  grid-auto-rows: auto;
}
</style>