<template>
  <div class="search">
    <span class="iconfont icon-sousuo_o"></span>
    <input class="ipt" type="text" placeholder="小黄杏美式">
    <div class="clear" ref="clear-ref">
      <span class="iconfont icon-guanbi_o"></span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  height: 3rem;
  background-color: var(--second-bg-color);
  padding: 0 var(--p-m-g);
  border-radius: 1.5rem;
}

.ipt {
  border: none;
  outline: none;
  background-color: transparent;
  font: inherit;
  color: inherit;
  flex: 1;
}

.clear {
  display: none;
}

.clear.show {
  position: absolute;
  right: var(--p-m-g);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #ccc;
}

.clear .iconfont {
  font-size: 2rem;
  color: #fff;
}
</style>