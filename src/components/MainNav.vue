<template>
  <div class="main-nav">
    <header class="header flex">
      <span>Hey，来给幸运打个招呼</span>
      <button @click="toLogin">登录/注册</button>
    </header>
    <div class="item">
      <span class="iconfont icon-login-"></span>
      <h3>到店取</h3>
      <p class="f-s-s">提前点单免排队</p>
    </div>
    <div class="item">
      <span class="iconfont icon-shipment-upload"></span>
      <h3>幸运送</h3>
      <p class="f-s-s">外卖及时送达</p>
    </div>
    <div class="item">
      <span class="iconfont icon-shopping-cart-download"></span>
      <h3>电商购</h3>
      <p class="f-s-s">屯咖啡买周边</p>
    </div>
    <div class="item">
      <span class="iconfont icon-money-wallet-open"></span>
      <h4>充4赠3</h4>
      <p class="f-s-s">咖啡钱包</p>
    </div>
    <div class="item">
      <span class="iconfont icon-show-hat-magician-"></span>
      <h4>礼品卡</h4>
      <p class="f-s-s">送Ta咖啡</p>
    </div>
    <div class="item">
      <span class="iconfont icon-human-resources-search-employees"></span>
      <h4>多人团聚</h4>
      <p class="f-s-s">一键开票</p>
    </div>
    <div class="item">
      <span class="iconfont icon-shopping-bag-heart"></span>
      <h4>拼单满减</h4>
      <p class="f-s-s">一起买更划算</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const toLogin = () => {
  // window.open('https://www.luckincoffee.com/login')
  router.push('/login-guide')
}
</script>

<style scoped>
.main-nav {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-image: linear-gradient(#f406, transparent), url('@/assets/dec0.png');
  background-size: 150% 60%, 150% 70%;
  background-position: top -50% left 50%;
  background-repeat: no-repeat;
  background-color: #fff;
  border-radius: 0 0 var(--p-m-g) var(--p-m-g);
  z-index: 1;
}

.header {
  position: absolute;
  left: 0;
  right: 0;
  top: -5rem;
  height: 5rem;
  background-color: #333;
  color: var(--second-color);
  padding: 0 var(--p-m-g);
}

.header button {
  background-color: var(--second-color);
  color: #333;
  border-radius: var(--p-m-g);
  padding: 0 var(--p-m-g);
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: calc(100%/3);
  aspect-ratio: 2/2;
}

.main-nav .item:nth-of-type(n+4) {
  justify-content: center;
  aspect-ratio: 2/3;
  width: 25%;
}
</style>