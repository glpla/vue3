<script setup>
import { onMounted } from 'vue';
import GoodsItem from '@/components/GoodsItem.vue';
import { useGoodsStore } from '@/stores/goods';
const goodsStore = useGoodsStore();
onMounted(() => {
  if (!goodsStore.goods.length) {
    goodsStore.getGoods()
  }

  // goodsStore.getGoods()
  // window.addEventListener('scroll', () => {
  //   let scrollTop = document.documentElement.scrollTop;
  //   let windowHeight = document.documentElement.clientHeight;
  //   let scrollHeight = document.documentElement.scrollHeight;
  //   if (scrollTop + windowHeight >= scrollHeight) {
  //     goodsStore.getGoods()
  //   }
  // })

})
</script>

<template>
  <div class="goods">
    <div class="loading" v-if="goodsStore.isLoading">loading...</div>
    <template v-else-if="goodsStore.goods.length">
      <GoodsItem v-for="(item, ind) in goodsStore.goods" :key="item.id" :product="item" />
      <footer class="f-s-s">我是有底线的~</footer>
    </template>
    <div v-else>商品获取失败，请稍后再试</div>
  </div>
</template>

<style scoped>
.loading {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  text-align: center;
  color: #808080;
  padding-top: 1rem;
  padding-bottom: 4rem;
}
</style>