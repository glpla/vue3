<template>
  <div class="test">
    <h2>Carts</h2>
    <label class="cb">
      <input type="checkbox" name="all" v-model="isAll" @change="selAll">
      <span>select all</span>
    </label>
    <div class="item" v-for="item in goods" :key="item.id">
      <label class="cb">
        <input type="checkbox" name="cart" v-model="selectedGoods" :value="item">
      </label>
      <span>{{ item.title }}</span>
      <span>{{ item.price }}</span>
      <span>{{ item.quantity }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const goods = ref([{ id: 1, title: 'coffee', price: 8, quantity: 2 }, { id: 2, title: 'pen', price: 10, quantity: 4 }, { id: 3, title: 'book', price: 12, quantity: 6 }, { id: 4, title: 'ruler', price: 9, quantity: 8 }])
const selectedGoods = ref([])
const isAll = ref(false)

watch(selectedGoods, (newVal) => {
  isAll.value = newVal.length === goods.value.length
})
const selAll = () => {
  if (isAll.value) {
    selectedGoods.value = [...goods.value]
  } else {
    selectedGoods.value = []
  }
}
</script>

<style scoped>
.test {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f1f1f1;
}

h2 {
  text-align: center;
}

.item {
  display: grid;
  grid-template-columns: 16px repeat(3, 100px);
}
</style>