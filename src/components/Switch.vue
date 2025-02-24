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
  border-radius: 2rem;
}

.switch-item {
  height: 3rem;
  border-radius: 2rem;
  padding: 0 var(--p-m-g);
}

.active {
  background-color: var(--main-color);
  color: #fff;
}
</style>