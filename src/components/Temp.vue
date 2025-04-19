<template>
  <div class="temp">
    <div @click="fn">fn</div>
  </div>
</template>

<script setup>
const props = defineProps({
  fn: {
    type: Function,
    default: () => { }
  }
})
</script>

<style scoped></style>