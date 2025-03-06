<template>
  <div class="tabbar" ref="tabbar">
    <button v-for="(item, ind) in tabs" :key="ind" class="tab-item" @click.stop="navToItem(item)"
      :class="{ active: currentInd === ind }">
      <h3>{{ item.title }}</h3>
    </button>
    <!-- <RouterLink v-for="(item, ind) in tabs" :key="ind" class="tab-item" :to="item.path">
      <h3>{{ item.title }}</h3>
    </RouterLink> -->
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const props = defineProps(['tabs'])
const currentInd = ref(0)

const navToItem = (item) => {
  router.push(item.path)
  currentInd.value = item.ind
}
</script>

<style scoped>
.tabbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 2.4;
}

.tab-item {
  position: relative;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 60%;
  height: 4px;
  background-color: var(--main-color);
}
</style>