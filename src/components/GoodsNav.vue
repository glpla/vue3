<template>
  <div class="goods-nav">
    <div class="item f-s-m active">经典菜单</div>
    <div class="item f-s-m">会员卡</div>
    <div class="item f-s-m">年度封神榜</div>
    <div class="item f-s-m">我的常点</div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.goods-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--p-m-g);
  line-height: 4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item {
  position: relative;
}

.item.active::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 60%;
  height: 4px;
  background-color: var(--main-color);
}
</style>