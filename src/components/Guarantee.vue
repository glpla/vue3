<template>
  <div class="guarantee">
    <Security />
    <h3 class="em">小程序交易保障</h3>
    <span class="ellipsis">先行赔付 · 消费者权益保护</span>
    <!-- <button class="btn" @click.stop="handleGuarantee">详情</button> -->
    <button class="btn" @click.stop="model = true">详情</button>
  </div>
</template>

<script setup>
import Security from './Security.vue';
const model = defineModel()
</script>

<style scoped>
.guarantee {
  display: flex;
  align-items: center;
  gap: var(--p-m-g);
}

.em {
  color: var(--security-color);
}

.ellipsis {
  flex: 1;
}

.btn {
  color: var(--tips-color);
}
</style>