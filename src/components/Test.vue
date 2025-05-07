<template>
  <div class="test">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button loading type="warning">警告按钮</van-button>
    <van-icon name="chat-o" dot />
    <van-icon name="chat-o" badge="9" />
    <van-icon name="chat-o" badge="99+" />
    <van-icon name="location" />
    <!-- 可以使用 CellGroup 作为容器 -->
    <van-cell-group inset>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
    <div class="box"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('');
</script>

<style scoped>
.box {
  width: 200px;
  height: 300px;
  background-color: #ff0;
}
</style>