<template>
  <div class="mine-view">
    <header class="header">
      <img :src="src" alt="">
      <span>glpla.github.io</span>
      <span @click="$router.push('/center')">&gt;</span>
    </header>
    <div class="rank">
      <div class="f-b f-s-m">Lv99 九色鹿</div>
      <div class="score">
        <span><span class="f-b f-s-b">2025</span> <span class="iconfont icon-rudolfdeer"></span></span>
        <span>查看我的权益 &gt;</span>
      </div>
      <div class="bar"></div>
    </div>
    <div class="menu">
      <div class="item">
        <span class="iconfont icon-shopping-cart-download"></span>
        <span>我的订单</span>
      </div>
      <div class="item">
        <span class="iconfont icon-money-wallet-open"></span>
        <span>咖啡钱包</span>
      </div>
      <div class="item">
        <span class="iconfont icon-shopping-bag-heart"></span>
        <span>优惠券</span>
      </div>
      <div class="item">
        <span class="iconfont icon-mylocation"></span>
        <span>招商加盟</span>
      </div>
      <div class="item">
        <span class="iconfont icon-balance"></span>
        <span>账户余额</span>
      </div>
      <div class="item">
        <span class="iconfont icon-settings2"></span>
        <span>发票管理</span>
      </div>
      <div class="item">
        <span class="iconfont icon-show-hat-magician-"></span>
        <span>兑换优惠</span>
      </div>
      <div class="item">
        <span class="iconfont icon-kefu"></span>
        <span>帮助反馈</span>
      </div>
      <div class="item">
        <span class="iconfont icon-shopping-bag-heart"></span>
        <span>礼品卡</span>
      </div>
      <div class="item">
        <span class="iconfont icon-heart-like"></span>
        <span>口味定制</span>
      </div>
      <div class="item">
        <span class="iconfont icon-shipment-upload"></span>
        <span>活动周边</span>
      </div>
      <div class="item">
        <span class="iconfont icon-human-resources-search-employees"></span>
        <span>多人团餐</span>
      </div>
      <div class="item">
        <span class="iconfont icon-weixin0"></span>
        <span>关注微信</span>
      </div>
    </div>
    <XinHua />
  </div>
</template>

<script setup>
import XinHua from '@/components/XinHua.vue';
import src from '@/assets/avatar.jpg';
</script>

<style scoped>
.header {
  height: 30vh;
  display: flex;
  align-items: center;
  gap: var(--p-m-g);
  padding: var(--p-m-g);
  background-image: linear-gradient(var(--main-color), #a8d4f8);
  color: #fff;
  font-size: 1.8rem;
}

.header img {
  width: 6rem;
  border-radius: 50%;
}

.rank {
  margin: var(--p-m-g);
  background-color: #fff;
  border-radius: var(--p-m-g);
  padding: var(--p-m-g);
  margin-top: calc(-4*var(--p-m-g));
}

.score {
  display: flex;
  justify-content: space-between;
  margin-top: var(--p-m-g);
  align-items: flex-end;
}

.bar {
  margin: var(--p-m-g) 0;
  display: flex;
  background-color: #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.bar::before {
  content: '';
  width: 80%;
  height: 4px;
  background-color: var(--main-color);
}

.menu {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  gap: var(--p-m-g);
  padding: var(--p-m-g);
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.xin-hua {
  position: relative;
  z-index: 0;
}
</style>