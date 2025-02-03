<template>
  <div class="cart" :class="{ 'show-cont-all': isShowCartDetail }" @click.self="closeCartDetail">
    <div class="cont">
      <header class="header">
        <div class="all">
          <input type="checkbox" id="all">
          <label for="all">已选择商品（{{ getQuantity() }}件）</label>
        </div>
        <div class="clear" @click.stop="cartStore.clearCart">
          <span class="iconfont icon-shanchu_o"></span>
          <span>清空购物车</span>
        </div>
      </header>
      <div class="item" v-for="(item, ind) in cartStore.cart" :key="item.id">
        <input type="checkbox" name="" id="">
        <img class="img" :src="`https://glpla.github.io/utils${item.img}`" alt="">
        <div class="info">
          <h4 class="title">{{ item.name }}</h4>
          <div class="sub-title">{{ item.desc }}</div>
          <div><span class="price-new">&yen;{{ item.price }}</span><span class="price-old">&yen;{{ item.priceOrignal
              }}</span></div>
        </div>
        <div class="oper">
          <button class="btn dec" @click="item.quantity--">-</button>
          <span class="num">{{ item.quantity }}</span>
          <button class="btn inc" @click="item.quantity++">+</button>
        </div>
      </div>
    </div>
    <footer>
      <button class="btn cart-left" @click.stop="showCartDetail">
        <span class="iconfont icon-icon_ruixingkafei"></span>
        <span class="cart-num f-s-s">{{ getQuantity() }}</span>
      </button>
      <div class="price">
        <div>
          <span>预计到手 </span>
          <span class="total-price f-s-b f-b">&yen;{{ getPrice().toFixed(2) }}</span>
        </div>
        <div class="total-promotion f-s-s">
          <span>已享受更多优惠，共减免 </span>
          <span>&yen;{{ getPriceDiscount().toFixed(2) }}</span>
        </div>
      </div>
      <router-link class="btn pay-btn f-s-b" to="/order">去结算</router-link>
    </footer>
  </div>
</template>

<script setup>
import logo from '@/assets/logo.png'
import { ref, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore()
const isShowCartDetail = ref(false)
const showCartDetail = () => {
  isShowCartDetail.value = !isShowCartDetail.value
}

const closeCartDetail = () => {
  isShowCartDetail.value = false
}

const getCartTotal = () => {
  return cartStore.cart.reduce(
    (total, item) => total + item.price * (1 - item.discount) * item.quantity,
    0
  );
};

const getPrice = () => {
  return cartStore.cart.reduce(
    (total, item) => total + item.price * (1 - item.discount) * item.quantity,
    0
  );
};

const getPriceDiscount = () => {
  return cartStore.cart.reduce(
    (total, item) => total + item.price * item.discount * item.quantity,
    0
  );
};

const getQuantity = () => {
  return cartStore.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

onMounted(() => {
  // fetch('https://glpla.github.io/utils/data/coffee.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data.cont);
  //     cartData.value = data.cont.map(item => ({ ...item, num: 1 }))
  //   })
  // cartStore.fetchCart()
  console.log('cart loading', cartStore.cart);

})
</script>

<style scoped>
.cart {
  background-color: rgba(0, 0, 0, 0.2);
}

.show-cont-all {
  height: 100vh;
}

.cont {
  background-color: var(--bg-color);
  overflow: hidden;
  max-height: 0;
  padding: 0 var(--p-m-g) var(--p-m-g);
}

.show-cont-all .cont {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  max-height: 50vh;
  padding-bottom: calc(6rem + var(--p-m-g));
  overflow-y: auto;
}

.header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--second-bg-color);
}

.header .all input {
  margin-right: var(--p-m-g);
}

.header .iconfont {
  margin-left: auto;
}

.item {
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

.oper span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
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

footer {
  position: absolute;
  left: var(--p-m-g);
  right: var(--p-m-g);
  bottom: var(--p-m-g);
  display: flex;
  align-items: center;
  gap: var(--p-m-g);
  height: 6rem;
  background-color: var(--bg-color);
  border-radius: 3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

footer .cart-left {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 var(--p-m-g);
  color: var(--main-color);
  font-size: 3.2rem;
}

footer .cart-left .iconfont {
  font-size: 5rem;
  color: var(--second-color);
}

footer .cart-left .cart-num {
  position: absolute;
  right: -0.5rem;
  top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  color: #fff;
  background-color: var(--second-color);
  border-radius: 50%;
  border: 1px solid #fff;
}

footer .price {
  flex: 1;
}

footer .total-price {
  color: var(--warn-color);
}

footer .total-promotion {
  color: #999;
}

footer .pay-btn {
  width: 10rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  color: #fff;
}
</style>