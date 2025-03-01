<template>
  <div class="promotion">
    <div class="coupon  m-b-1">
      <div class="discount">
        <span>5.2</span>
        <span>折</span>
      </div>
      <div class="info">
        <div class="f-s-m f-b">全场饮品</div>
        <div>仅剩11小时到期</div>
      </div>
    </div>
    <div class="cont grid">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.coupon {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--p-m-g);
  border: 1px solid var(--warn-color);
  background-color: var(--warn-color-light);
  border-radius: var(--p-m-g);
  color: var(--warn-color);
}

.coupon::before,
.coupon::after {
  content: '';
  position: absolute;
  width: var(--p-m-g);
  height: var(--p-m-g);
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid var(--warn-color);
  left: calc(12rem + var(--p-m-g)/-2);
  transform: rotateZ(-45deg);
  z-index: 1;
}

.coupon::before {
  border-top-color: #fff;
  border-right-color: #fff;
  top: calc(var(--p-m-g)/-2);
}

.coupon::after {
  bottom: calc(var(--p-m-g)/-2);
  border-left-color: #fff;
  border-bottom-color: #fff;
}

.discount {
  width: 12rem;
  height: 8rem;
  line-height: 8rem;
  text-align: center;
  border-right: 1px dashed var(--warn-color);
}


.discount span:first-child {
  font-size: 3rem;
  font-weight: 600;
}

.info {
  flex: 1;
  padding-left: var(--p-m-g);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 10rem;
  gap: var(--p-m-g);
}

.item {
  background-color: var(--second-bg-color);
  border-radius: var(--p-m-g);
  background-image: url('@/assets/logo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.item:first-child {
  grid-row: span 2;
}
</style>