<template>
  <div class="title">
    <h3>{{ title }}</h3>
    <button @click="handle">查看全部 &gt;</button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  handle: {
    type: Function,
    default: () => { }
  }
})
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>