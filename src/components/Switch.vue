<template>
  <div class="switch">
    <div class="switch-box">
      <button class="switch-item" :class="{ active: ind == currentInd }" v-for="(item, ind) in switchs"
        @click="currentInd = ind">{{
          item.title }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['switchs'])
const currentInd = ref(0)
</script>

<style scoped>
.switch {
  display: flex;
  justify-content: center;
  align-items: center;
}

.switch-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--second-bg-color);
  border-radius: var(--el-h);
}

.switch-item {
  min-width: calc(1.5*var(--el-h));
  height: var(--el-h);
  border-radius: var(--el-h);
  padding: 0 var(--p-m-g);
}

.active {
  background-color: var(--main-color);
  color: #fff;
}
</style>