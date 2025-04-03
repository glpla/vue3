<script setup>
import { onMounted } from 'vue';
import GoodsItem from '@/components/GoodsItem.vue';
import { useGoodsStore } from '@/stores/goods';
const goodsStore = useGoodsStore();
onMounted(() => {
  goodsStore.getGoodsWithSupabse()
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
    <template v-if="goodsStore.goods.length">
      <GoodsItem v-for="(item, ind) in goodsStore.goods" :key="item.id" :product="item" />
      <footer class="f-s-s">我是有底线的~</footer>
    </template>
    <div v-else>商品获取失败，请刷新页面</div>
  </div>
</template>

<style scoped>
footer {
  text-align: center;
  color: #808080;
  padding-top: 1rem;
  padding-bottom: 4rem;
}
</style>