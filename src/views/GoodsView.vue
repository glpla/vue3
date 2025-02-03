<script setup>
import { onMounted } from 'vue';
import GoodsItem from '@/components/GoodsItem.vue';
import Cart from '@/components/Cart.vue';
import { useGoodsStore } from '@/stores/goods';
import { useCartStore } from '@/stores/cart';
const goodsStore = useGoodsStore();
const cartStore = useCartStore();
onMounted(() => {
  // let json = fetch('https://glpla.github.io/utils/data/coffee.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data.cont);
  //     goods.value = data.cont
  //   })
  goodsStore.getGoods()
})
</script>

<template>
  <div class="goods">
    <template v-if="goodsStore.goods.length">
      <GoodsItem v-for="(item, ind) in goodsStore.goods" :key="item.id" :product="item" />
    </template>
    <div v-else>lists empty</div>
    <Cart class="w cart" v-if="cartStore.cart.length" />
  </div>
</template>

<style scoped>
.goods {
  width: 100%;
  padding-left: var(--p-m-g);
  padding-right: var(--p-m-g);
}

.cart {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
</style>