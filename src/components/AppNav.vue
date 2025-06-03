<template>
  <div class="app-nav flex p-1">
    <router-link class="nav-item" v-for="(item, ind) in nav" :to="item.path" :key="item.id" replace>
      <span class="iconfont" :class="item.icon"></span>
      <div>{{ item.title }}</div>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const nav = ref([
  { id: 0, title: '首页', path: '/', icon: 'icon-home' },
  { id: 1, title: '菜单', path: '/menu', icon: 'icon-coffee-cup' },
  { id: 2, title: '电商', path: '/mall', icon: 'icon-Bag-' },
  { id: 3, title: '会员卡', path: '/membership', icon: 'icon-membership_code' },
  { id: 4, title: '我的', path: '/mine', icon: 'icon-rudolfdeer' }
])
</script>

<style scoped>
.app-nav {
  height: var(--app-nav-h);
  background-color: #fff;
}

.nav-item {
  padding: 0 var(--p-m-g);
  /* color: #333; */
}
</style>