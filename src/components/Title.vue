<template>
  <div class="title">
    <h3>{{ title }}</h3>
    <button @click="handle">
      <span>查看全部</span>
      <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
    </button>
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