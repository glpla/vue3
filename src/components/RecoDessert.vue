<template>
  <div class="reco-dessert">
    <div class="item" v-for="(item, ind) in dessert" :key="item.id">
      <input class="cb" type="checkbox" name="dessert" :id="item.id" :value="item.title" v-model="dessertSelected">
      <label :for="item.id">
        <img class="img" :src="`https://glpla.github.io/utils/${item.img}`" alt="">
        <p>{{ item.title }}</p>
        <div class="price">
          <span class="f-b">&yen;{{ dis(item) }}&nbsp;</span>
          <span class="f-s-s">&yen;{{ item.price_original }}</span>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['dessert'])
const dessertSelected = defineModel('dessertSelected', { default: [] })

const dis = computed(() => {
  return (item) => item.price_original * (1 - item.discount)
})
</script>

<style scoped>
.reco-dessert {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--p-m-g);
  padding: 2rem 1rem;
  background-color: #fff;
}

.item {
  position: relative;
}

.item input {
  position: absolute;
  top: 0;
  right: 0;
}

.item label {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item img {
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  margin-bottom: var(--p-m-g);
}

.price span:last-child {
  color: #999;
  text-decoration: line-through;
}
</style>