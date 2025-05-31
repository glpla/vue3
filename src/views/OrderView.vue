<template>
  <div class="order-view">
    <div class="flex address-box">
      <div class="loc">
        <div class="title">
          <h4>桂林万达广场店 | 0.5km&nbsp;</h4>
          <button @click="$router.push('/location')">&gt;</button>
        </div>
        <div>树先生 &nbsp; 137xxxx5481</div>
      </div>
      <Delivery />
    </div>
    <div class="flex delivery-box">
      <div>
        <h4>立即可取，约10:21可取</h4>
        <p>金牌咖啡正在等你下单</p>
      </div>
      <img :src="logo" alt="">
    </div>
    <div class="p-1">
      <OrderItem v-for="cart in orderStore.orders" :key="itemImg.id" :order="cart"></OrderItem>
    </div>
    <div class="flex pay-box">
      <h4>支付方式</h4>
      <button class="">
        <span class="iconfont icon-weixin wx"></span>
        <span>&nbsp;微信支付</span>
        <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
      </button>
    </div>
    <div class="tips-box">
      <div class="flex">
        <h4>取餐方式</h4>
        <div class="flex">
          <label class="radio"><input type="radio" name="takeout" value="店内用餐" checked>店内用餐</label>
          <label class="radio"><input type="radio" name="takeout" value="自提带走">自提带走</label>
        </div>
      </div>
      <div class="flex">
        <h4>备注特别要求</h4>
        <button><span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span></button>
      </div>
    </div>
    <div class="p-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse iure itaque nam
      atque,
      tempora nostrum laudantium fugiat sit suscipit vero excepturi voluptate voluptates sed illum eum doloribus facilis
      vel?</div>
    <footer class="w flex submit-box">
      <div>
        <p>
          <span class="">应付&nbsp;</span>
          <span class="f-s-m f-b">&yen;{{ orderStore.sum.toFixed(2) }}</span>
        </p>
        <p class="warn f-s-s">总计优惠&nbsp;&yen;{{ orderStore.discount.toFixed(2) }}</p>
      </div>
      <button class="btn submit-btn f-s-b" @click="submitOrder">去支付</button>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useOrderStore } from '@/stores/order'
import Delivery from '@/components/Delivery.vue'
import logo from '@/assets/luckin-coffee.png'
import itemImg from '@/assets/logo.png'
import OrderItem from '@/components/OrderItem.vue'
const orderStore = useOrderStore()
const submitOrder = () => {
  alert('提交订单成功')
}
onMounted(() => {
})
</script>

<style scoped>
.flex {
  padding: var(--p-m-g);
}

.order-view {
  padding: var(--p-m-g);
  margin-bottom: var(--app-nav-h);
  background-color: #f5f6f7;
}

.order-view>div {
  background-color: #fff;
  margin-bottom: var(--p-m-g);
  border-radius: var(--p-m-g);
}

.loc .title {
  display: flex;
  align-items: center;
}

.delivery-box img {
  width: 10rem;
}

.pay-box .wx {
  color: #09bb07;
}

.submit-box {
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--app-nav-h);
  background-color: #fff;
  bottom: 0;
  padding: var(--p-m-g);
}

.submit-box .warn {
  font-size: 1.2rem;
}

.submit-btn {
  background-color: var(--warn-color);
  color: #fff;
  width: 15rem;
  height: var(--el-h);
  border-radius: var(--el-h);
}

.radio {
  display: flex;
  align-items: center;
}

.radio input {
  appearance: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--second-color);
}

.radio input:checked {
  background-color: var(--second-color);
  text-align: center;
}

.radio input:checked::before {
  content: '\2713';
  color: #fff
}
</style>