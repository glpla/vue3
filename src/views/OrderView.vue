<template>
  <div class="w order-view">
    <div class="flex address-box">
      <div>
        <p class="f-s-m">Lorem ipsum dolor sit amet.&nbsp;<span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
        </p>
        <p>树先生 &nbsp; 137xxxx5481</p>
      </div>
      <div class="flex switch f-s-s">
        <span>自提</span>
        <span>外送</span>
      </div>
    </div>
    <div class="flex delivery-box">
      <div>
        <p class="f-s-m">立即可取，约10:21可取</p>
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
      <p>支付方式</p>
      <button class="">
        <span class="iconfont icon-weixin wx"></span>
        <span>&nbsp;微信支付</span>
        <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
      </button>
    </div>
    <div class="flex tips-box">
      <p>备注特别要求</p>
      <button>
        <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
      </button>
    </div>
    <div class="f-s-s p-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse iure itaque nam
      atque,
      tempora nostrum laudantium fugiat sit suscipit vero excepturi voluptate voluptates sed illum eum doloribus facilis
      vel?</div>
    <footer class="w flex submit-box">
      <div>
        <p>
          <span class="f-s-s">应付&nbsp;</span>
          <span class="f-s-b f-b">&yen;9.88</span>
        </p>
        <p class="warn f-s-s">总计优惠&nbsp;&yen;8.8</p>
      </div>
      <button class="btn submit-btn f-s-b">去支付</button>
    </footer>
  </div>
</template>

<script setup>
import logo from '@/assets/luckin-coffee.png'
import itemImg from '@/assets/logo.png'
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--p-m-g);
}

.order-view {
  background-color: var(--second-bg-color);
  padding: var(--p-m-g) var(--p-m-g) 8rem;
}

.order-view>div {
  background-color: #fff;
  margin-bottom: var(--p-m-g);
  border-radius: var(--p-m-g);
}

.switch {
  background-color: var(--second-bg-color);
  border-radius: 2rem;
  padding: 0;
}

.switch span {
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  background-color: var(--second-bg-color);
}

.switch span:nth-child(1) {
  background-color: var(--main-color);
  color: #fff;
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
  height: 8rem;
  background-color: #fff;
  bottom: 0;
  padding: 0 var(--p-m-g);
}

.submit-box .warn {
  font-size: 1.2rem;
}

.submit-btn {
  background-color: var(--warn-color);
  color: #fff;
  width: 15rem;
  height: 4rem;
  border-radius: 2rem;
}
</style>