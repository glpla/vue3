<template>
  <div class="follow">
    <span @click="favorite" class="iconfont icon-heart-like"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  favorite: {
    type: Function,
    default: () => { }
  }
})
</script>

<style scoped></style>