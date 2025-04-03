<template>
  <div class="goods-item m-b-2" @click.stop="$router.push('/details/' + product.id)">
    <img class="img" :src="'https://glpla.github.io/utils' + product.img" alt="">
    <div class="info">
      <h3 class="title mb-1">{{ product.name }} <span class="flavour f-s-s">{{ product.flavour }}</span> </h3>
      <div class="desc">{{ product.desc }}</div>
      <div class="price f-b">
        <span>&yen;{{ product.price }}</span>
        <span class="price-inner"> (市场价<span>&yen;{{ product.price_original }}</span>)</span>
      </div>
      <div class="price-discount warn">预估到手 <span>&yen;{{ getDiscount(product) }}</span></div>
    </div>
    <button class="btn add-btn p-1">
      <span class="iconfont icon-gouwuche_o"></span>
      <span class="quantity">{{ product.quantity }}</span>
    </button>
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

  img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  .info {
    overflow: hidden;

    .title {

      .flavour {
        border: 1px solid #999;
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