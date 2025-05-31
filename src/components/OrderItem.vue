<template>
  <div class="order-item mb-1">
    <img :src="`https://glpla.github.io/utils${order.img}`" alt="" class="img">
    <div class="info">
      <h4 class="name">{{ order.name }}</h4>
      <div class="desc ellipsis">{{ order.desc }}</div>
      <div class="warn">Lorem, ipsum.</div>
    </div>
    <div class="price">
      <div class="f-s-m f-b">&yen;{{ order.price }}</div>
      <div class="txt-del">&yen;{{ order.price_original }}</div>
      <div class="num-txt f-s-s">x{{ order.quantity }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  order: {
    type: Object,
    default: {}
  }
})
</script>

<style scoped>
.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--p-m-g);
}

.img {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
}

.info {
  flex: 1;
  overflow: hidden;
}
</style>