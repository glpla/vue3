<template>
  <div class="goods-item">
    <img class="img" :src="'https://glpla.github.io/utils' + product.img" alt="">
    <div class="info">
      <h4 class="title f-s-m">{{ product.name }} <span class="flavour">{{ product.flavour }}</span> </h4>
      <div class="desc">{{ product.desc }}</div>
      <div class="price f-b">
        <span>&yen;{{ product.price }}</span>
        <span class="price-inner"> (市场价<span>&yen;{{ product.priceOrignal }}</span>)</span>
      </div>
      <div class="price-discount warn">预估到手 <span>&yen;{{ getDiscount(product) }}</span></div>
    </div>
    <router-link class="btn add-btn" :to="'/details/' + product.id">
      <span class="iconfont icon-gouwuche_o"></span>
      <span class="quantity">{{ product.quantity }}</span>
    </router-link>
    <!-- <div class="btn" @click="addCart(product.id)">
      <span class="iconfont icon-gouwuche_o"></span>
    </div> -->
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  product: {
    type: Object,
    default: () => { }
  }
})
const getDiscount = computed(() => {
  return item => {
    return (item.price * (1 - item.discount)).toFixed(2)
  }
})
</script>

<style scoped>
.goods-item {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: var(--p-m-g);
  margin-bottom: 1rem;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: var(--p-m-g);
  }

  .info {
    overflow: hidden;

    .title {
      margin-bottom: var(--p-m-g);

      .flavour {
        border: 1px solid #999;
        font-size: 1.2rem;
        padding: 0 var(--p-m-g);
        border-radius: var(--p-m-g);
        font-weight: normal;
      }
    }

    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: var(--p-m-g);
    }

    .price {
      color: var(--warn-color);

      .price-inner {
        color: #999;
        font-weight: normal;

        span {
          text-decoration: line-through;
        }
      }
    }

    .price-discount {

      span {
        background: var(--warn-color);
        color: #fff;
        border-radius: var(--p-m-g);
        padding: 0 var(--p-m-g);
      }
    }
  }

  .add-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: var(--main-color);
    color: #fff;
    align-self: center;
    padding: var(--p-m-g);

    &:hover {
      background-color: var(--main-color);
    }

    .quantity {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>