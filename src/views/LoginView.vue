<template>
  <div class="login-view">
    <img src="/xh.jpg" alt="">
    <h3 class="title f-b">广州新华学院</h3>
    <p class="greeting">欢迎回来</p>
    <div class="item">
      <input type="text" v-model.trim="user.cell" required maxlength="11" @focus="isFocus = true"
        @blur="isFocus = false">
      <span class="tips tips-cell" :class="{ 'active': isFocus && !user.cell }">请输入手机号</span>
      <!-- <span class="tips tips-cell" v-show="isFocus && !user.cell">请输入手机号</span> -->
    </div>
    <div class="item">
      <input type="text" v-model.number="user.code" required maxlength="6">
      <button class="tips tips-code" :disabled="isCellActive" @click="getCode">获取验证码</button>
    </div>
    <div class="item">
      <label>
        <input type="checkbox" v-model="user.isAgree">
        <span>我已经阅读并同意
          <a href="#">《瑞幸咖啡用户协议》</a> 、<a href="#">《瑞幸咖啡隐私权政策》</a></span>
      </label>
    </div>
    <div class="item f-s-m">
      <button class="submit-btn" @click.stop="submit" :disabled="!isReady">确认</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const user = ref({
  cell: '',
  code: null,
  isAgree: false,
  code: null
})
const isFocus = ref(false)
// const isReady = ref(true)
const isCellActive = ref(true)
const isReady = computed(() => {
  return !isCellActive.value && user.value.isAgree && user.value.code
})
watch(() => user.value.cell, (n, o) => {
  if (/^1[3-9]\d{9}$/.test(n)) {
    isCellActive.value = false
  } else {
    isCellActive.value = true
  }
})
const getCode = () => {
  user.value.code = Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
  alert(`${user.value.code}\n验证码已发送`)
}
const submit = () => {
  alert(`${user.value.cell}\n登录成功`)
  router.replace('/menu')
  localStorage.setItem('user', JSON.stringify(user.value))
}
</script>

<style scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--p-m-g);
  width: 90%;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
}

.greeting {
  margin-bottom: var(--p-m-g);
}

.item {
  position: relative;
  width: 100%;
}

img {
  width: calc(3*var(--el-h));
  aspect-ratio: 1;
  border-radius: 50%;
}

.item a {
  color: var(--main-color);
}

.submit-btn,
input[type="text"] {
  width: 100%;
  height: var(--el-h);
  background-color: #eee;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  border-radius: 20px;
}

input[type="text"] {
  padding: 0 20px;
}

input[type="checkbox"] {
  margin-right: var(--p-m-g);
  accent-color: var(--main-color);
  border-radius: 50%;
}

.submit-btn {
  background-color: var(--main-color);
  color: #fff;
}

.submit-btn:disabled {
  background-color: #ccc;
}

.tips {
  position: absolute;
  top: 0;
  color: #666;
  line-height: var(--el-h);
}

.tips-cell {
  left: calc(2*var(--p-m-g));
  display: none;
}

.tips-cell.active {
  display: block;
}

.tips-code {
  right: calc(2*var(--p-m-g));
  color: var(--main-color);
}

.tips-code:disabled {
  color: #666;
}
</style>