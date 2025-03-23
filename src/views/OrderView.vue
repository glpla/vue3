<template>
  <div class="w order-view">
    <div class="flex address-box">
      <div class="loc">
        <div class="title">
          <span>桂林万达广场店 | 0.5km&nbsp;</span>
          <button @click="$router.push('/location')">&gt;</button>
        </div>
        <div>树先生 &nbsp; 137xxxx5481</div>
      </div>
      <Delivery />
    </div>
    <div class="flex delivery-box">
      <div>
        <div>立即可取，约10:21可取</div>
        <p>金牌咖啡正在等你下单</p>
      </div>
      <img :src="logo" alt="">
    </div>
    <div class="good-box">
      <div class="flex item" v-for="item in 5" :key="item.id">
        <img :src="itemImg" alt="" class="img">
        <div class="info">
          <h4 class="f-s-m">title</h4>
          <div class="">Lorem, ipsum dolor.</div>
          <div class="warn">Lorem, ipsum.</div>
        </div>
        <div class="price">
          <div class="f-s-m f-b">&yen;8.88</div>
          <div class="del-txt">&yen;8.88</div>
          <div class="num-txt f-s-s">x8</div>
        </div>
      </div>
    </div>
    <div class="flex pay-box">
      <h4>支付方式</h4>
      <button class="">
        <span class="iconfont icon-weixin wx"></span>
        <span>&nbsp;微信支付</span>
        <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
      </button>
    </div>
    <div class="flex tips-box">
      <h4>备注特别要求</h4>
      <button>&gt;</button>
    </div>
    <div class="p-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse iure itaque nam
      atque,
      tempora nostrum laudantium fugiat sit suscipit vero excepturi voluptate voluptates sed illum eum doloribus facilis
      vel?</div>
    <footer class="w flex submit-box">
      <div>
        <p>
          <span class="">应付&nbsp;</span>
          <span class="f-s-m f-b">&yen;9.88</span>
        </p>
        <p class="warn f-s-s">总计优惠&nbsp;&yen;8.8</p>
      </div>
      <button class="btn submit-btn f-s-b">去支付</button>
    </footer>
  </div>
</template>

<script setup>
import Delivery from '@/components/Delivery.vue'
import logo from '@/assets/luckin-coffee.png'
import itemImg from '@/assets/logo.png'
</script>

<style scoped>
.flex {
  padding: var(--p-m-g);
}

.order-view {
  padding: var(--p-m-g);
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

.item {
  gap: var(--p-m-g);
  margin-bottom: var(--p-m-g);
}

.item img {
  width: 8rem;
  /* height: 8rem; */
  object-fit: cover;
  border-radius: 4rem;
}

.item .info {
  flex: 1;
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
  /* height: 8rem; */
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
</style>