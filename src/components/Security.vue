<template>
  <span class="security">
    <span class="iconfont icon-shield shield"></span>
    <span class="iconfont icon-xiaochengxu xcx"></span>
  </span>
</template>

<style scoped>
.security {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
}

.security .iconfont {
  position: absolute;
}

.security .shield {
  color: var(--security-color);
  font-size: 2.8rem;
}

.security .xcx {
  font-size: 2.4rem;
  color: #fff;
}
</style>