<template>
  <div class="center-view">
    <div class="item">
      <span>头像</span>
      <img :src="src" alt="">
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>用户名</span>
      <span>glpla.github.io</span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>性别</span>
      <span>男</span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>我的幸运日</span>
      <span>19xx-xx-xx</span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>关联手机</span>
      <span>137-xxxx-xxxx</span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>收货地址</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>账号管理</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>免密支付</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>通用设置</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>协议与说明</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <button class="btn f-s-b">退出登录</button>
  </div>
</template>

<script setup>
import src from '@/assets/avatar.jpg';
</script>

<style scoped>
.center-view {
  padding: var(--p-m-g);
  background-color: #fff;
  margin: var(--p-m-g);
}

.item {
  display: flex;
  align-items: center;
  gap: var(--p-m-g);
  margin: var(--p-m-g) 0;
}

.item span:first-child {
  margin-right: auto;
}

.item img {
  width: 4rem;
  border-radius: 50%;
}

.btn {
  position: fixed;
  left: var(--p-m-g);
  right: var(--p-m-g);
  bottom: var(--p-m-g);
  background-color: var(--main-color);
  color: #fff;
  height: 40px;
  border-radius: 20px;
}
</style>