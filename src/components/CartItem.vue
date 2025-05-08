<template>
  <div class="cart-item">
    <input type="checkbox" name="cart" v-model="model" :value="cart">
    <img class="img" :src="`https://glpla.github.io/utils${cart.img}`" alt="">
    <div class="info">
      <h3 class="title">{{ cart.name }}</h3>
      <div class="sub-title">{{ cart.desc }}</div>
      <div>
        <span class="price-new">&yen;{{ cart.price }}</span>
        <span class="price-old">&yen;{{ cart.price_original }}</span>
      </div>
    </div>
    <div class="oper">
      <button class="btn dec" @click="cart.quantity--" :disabled="cart.quantity == 1">-</button>
      <span class="num">{{ cart.quantity }}</span>
      <button class="btn inc" @click="cart.quantity++" :disabled="cart.quantity >= cart.stock">+</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cart: {
    type: Object,
    default: {}
  }
});
const model = defineModel()
</script>

<style scoped>
.cart-item {
  display: flex;
  gap: var(--p-m-g);
  align-items: center;
  margin-bottom: 2rem;
}

.img {
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

.info {
  flex: 1;
  overflow: hidden;
}

.info .sub-title {
  margin-bottom: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.info .price-new {
  font-size: 1.6rem;
  color: var(--warn-color);
}

.info .price-old {
  color: #999;
  text-decoration: line-through;
  font-size: 1.4rem;
  margin-left: 6px;
}

.oper {
  display: flex;
}

.oper .num {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.oper .btn {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.oper .dec {
  border: 1px solid var(--main-color);
}

.oper .inc {
  background-color: var(--main-color);
  color: #fff;
}
</style>