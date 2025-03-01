<template>
  <div class="tab-goods grid">
    <CardItem v-for="item in 10" :key="item"></CardItem>
  </div>
</template>

<script setup>
import CardItem from '@/components/CardItem.vue';
</script>

<style scoped>
.tab-goods.grid {
  grid-auto-rows: auto;
}
</style>