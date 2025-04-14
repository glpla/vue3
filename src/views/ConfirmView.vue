<template>
  <div class="confirm-view">
    <span>注册成功</span>
    <span><span class="f-s-b warn">{{ sec }}</span> 秒后返回首页</span>
    <RouterLink class="button" to="/" replace>立即返回</RouterLink>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const sec = ref(5)
let timer = null
const handleSec = () => {
  sec.value--
  if (sec.value === 0) {
    router.replace('/')
    clearInterval(timer)
  }
}
onMounted(() => {
  timer = setInterval(handleSec, 1000)
})
onUnmounted(() => {
  timer && clearInterval(timer)
})
</script>

<style scoped>
.confirm-view {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.button {
  width: 100px;
  height: 40px;
  background-color: var(--main-color);
  color: #fff;
  text-align: center;
  line-height: 40px;
}
</style>