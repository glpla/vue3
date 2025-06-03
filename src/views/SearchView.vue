<template>
  <div class="search-view">
    <div class="search-box m-b-2">
      <button @click="$router.back()">
        <span class="iconfont icon-jiantou_liebiaoxiangzuo_o"></span>
      </button>
      <div class="ipt-box">
        <span class="iconfont icon-sousuo_o"></span>
        <input class="ipt" type="text" v-model.trim="search" placeholder="小黄杏美式" autofocus>
        <button class="clear" ref="clear-ref" @click="search = ''">
          <span class="iconfont icon-guanbi_o"></span>
        </button>
      </div>
      <button @click="doSearch">搜索</button>
    </div>
    <div class="cont" v-if="dataSearch.length">
      <GoodsItem v-for="(item, ind) in dataSearch" :key="item.id" :product="item" />
    </div>
    <div v-else class="txt-center">
      <img src="@/assets/not-found-removebg-preview.png" alt="">
      <div>抱歉，没有找到你想搜索的商品，换个词试试</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, useTemplateRef, computed } from 'vue'
import { useGoodsStore } from '@/stores/goods'
import GoodsItem from '@/components/GoodsItem.vue'
const goodsStore = useGoodsStore()
const search = ref('')
const clearRef = useTemplateRef('clear-ref')
const dataSearch = computed(() => {
  if (!search.value) return []
  return goodsStore.goods.filter(item => item.title.includes(search.value))
})
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
    goodsStore.getByQuery(search.value)
  } else {
    alert('请输入搜索内容')
  }
}
</script>

<style scoped>
.search-view {
  margin: var(--p-m-g);
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
  height: var(--el-h);
  background-color: var(--second-bg-color);
  padding: 0 var(--p-m-g);
  border-radius: var(--el-h);
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
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--dark-bg-color);
}

.clear .iconfont {
  font-size: 1.6rem;
  color: #fff;
}
</style>