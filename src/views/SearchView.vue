<template>
  <div class="search-view">
    <div class="search-box">
      <button @click="$router.back()">
        <span class="iconfont icon-jiantou_liebiaoxiangzuo_o"></span>
      </button>
      <div class="ipt-box">
        <span class="iconfont icon-sousuo_o"></span>
        <input class="ipt" type="text" v-model.trim="search" placeholder="小黄杏美式" autofocus>
        <div class="clear" ref="clear-ref" @click="search = ''">
          <span class="iconfont icon-guanbi_o"></span>
        </div>
      </div>
      <button @click="doSearch">搜索</button>
    </div>
    <div class="cont"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, useTemplateRef } from 'vue'
const search = ref('')
const clearRef = useTemplateRef('clear-ref')
watch(search, (newVal) => {
  if (newVal) {
    clearRef.value.classList.add('show')
  } else {
    clearRef.value.classList.remove('show')
  }
})

const doSearch = () => {
  if (search.value) {
    alert(search.value)
  } else {
    alert('请输入搜索内容')
  }
}
</script>

<style scoped>
.search-view {
  padding: var(--p-m-g);
  background-color: #fff;
}

.search-box {
  display: flex;
  align-items: center;
  gap: var(--p-m-g);
}

.search-box .ipt-box {
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
  background-color: var(--dark-bg-color);
}

.clear .iconfont {
  font-size: 2rem;
  color: #fff;
}
</style>