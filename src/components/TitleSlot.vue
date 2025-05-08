<template>
  <div class="title-slot">
    <slot></slot>
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
.title-slot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: var(--title-bar-height);
}
</style>