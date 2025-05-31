<template>
  <div class="cart" :class="{ 'show-cont-all': isShowCartDetail }" @click.self="isShowCartDetail = false">
    <div class="cont">
      <header class="header">
        <label class="all"><input type="checkbox" v-model="isSelectAll" @change="setAll"> 已选择商品（{{ count }}件）</label>
        <button class="clear" @click.stop="clearCarts">
          <span class="iconfont icon-shanchu_o"></span>
          <span>清空购物车</span>
        </button>
      </header>
      <CartItem v-for="(item, ind) in cartStore.carts" :key="item.id" :cart="item" v-model="selectedGoods"></CartItem>
    </div>
    <footer>
      <button class="btn cart-left" @click.stop="isShowCartDetail = !isShowCartDetail">
        <span class="iconfont icon-icon_ruixingkafei"></span>
        <span class="cart-num f-s-s">{{ count }}</span>
      </button>
      <div class="price">
        <div>
          <span>预计到手 </span>
          <!-- <span class="total-price f-s-m f-b">&yen;{{ getPrice().toFixed(2) }}</span> -->
          <span class="total-price f-s-m f-b">&yen;{{ sum.toFixed(2) }}</span>
        </div>
        <div class="total-promotion f-s-s">
          <span>已享受更多优惠，共减免 </span>
          <span>&yen;{{ getPriceDiscount }}</span>
        </div>
      </div>
      <div class="btn pay-btn f-s-m" @click="toOrder" v-if="sum">去结算</div>
      <div class="btn pay-btn f-s-m" t v-else>不可结算</div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { useOrderStore } from '@/stores/order';
import CartItem from './CartItem.vue';

const router = useRouter()
const cartStore = useCartStore()
const orderStore = useOrderStore()
const selectedGoods = ref([...cartStore.carts])
const isShowCartDetail = ref(false)
const isSelectAll = ref(true)
const sum = ref(0)
const count = ref(0)

watch(selectedGoods, (newVal) => {
  // select all
  isSelectAll.value = newVal.length === cartStore.carts.length
  // count sum
  sum.value = selectedGoods.value.reduce((total, item) => total + item.quantity * item.price * (1 - item.discount), 0)
  // count num
  count.value = selectedGoods.value.reduce((total, item) => total + item.quantity, 0)
}, { deep: true, immediate: true })

const setAll = () => {
  if (isSelectAll.value) {
    selectedGoods.value = [...cartStore.carts]
  } else {
    selectedGoods.value = []
  }
}
const getPriceDiscount = computed(() => {
  let res = selectedGoods.value.reduce((total, item) => total + item.quantity * item.price * item.discount, 0);
  return res.toFixed(2)
})

const clearCarts = () => {
  cartStore.clearCarts()
  selectedGoods.value = []
  isSelectAll.value = false
}

const toOrder = () => {
  orderStore.gerTempOrder(selectedGoods.value)
  router.push({
    name: 'order'
  })
}

onMounted(() => {
  console.log('cart loading', cartStore.carts);
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
  background-color: #fff;
  overflow: hidden;
  max-height: 0;
  transition: padding 0s, max-height 0.1s;
}

.show-cont-all .cont {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  max-height: 50vh;
  padding: 0 var(--p-m-g) calc(6rem + var(--p-m-g));
  overflow-y: auto;
}

.header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-bottom: 1px solid var(--second-bg-color);
  background-color: #fff;
}

.header .all input {
  margin-right: var(--p-m-g);
}

.header .iconfont {
  margin-left: auto;
}

footer {
  position: absolute;
  left: var(--p-m-g);
  right: var(--p-m-g);
  bottom: var(--p-m-g);
  display: flex;
  align-items: center;
  height: 6rem;
  background-color: #fff;
  border-radius: 3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

footer .cart-left {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--main-color);
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
  padding: var(--p-m-g);
}

footer .total-price {
  color: var(--warn-color);
}

footer .total-promotion {
  color: #999;
}

footer .pay-btn {
  /* width: 10rem; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  color: #fff;
  padding: 0 var(--p-m-g);
}
</style>