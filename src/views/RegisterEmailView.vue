<template>
  <div class="register-email-view">
    <img src="/xh.jpg" alt="">
    <h3 class="title f-b">广州新华学院</h3>
    <p class="greeting">欢迎回来</p>
    <form @submit.prevent="submit">
      <div class="item">
        <input type="text" v-model.trim="user.username" required maxlength="12" placeholder="用户名，最多12位">
        <span class="iconfont icon-gerentouxiang_o"></span>
      </div>
      <div class="item">
        <input type="email" v-model.trim="user.email" required maxlength="20" placeholder="电子邮箱">
        <span class="iconfont icon-youjian_o"></span>
      </div>
      <div class="item">
        <input type="password" v-model="user.password" required maxlength="8" placeholder="密码，最少6位">
        <span class="iconfont icon-suoding_o"></span>
      </div>
      <div class="item">
        <input type="password" v-model="user.confirmPassword" required maxlength="8" placeholder="请确认密码">
        <span class="iconfont icon-suoding_o"></span>
      </div>
      <div class="item">
        <label>
          <input class="cb-custom" type="checkbox" v-model="user.isAgree">
          <span>我已经阅读并同意
            <a href="#">《瑞幸咖啡用户协议》</a> 、<a href="#">《瑞幸咖啡隐私权政策》</a></span>
        </label>
      </div>
      <div class="item">
        <button class="submit-btn" type="submit">注册</button>
      </div>
    </form>
    <span>已经拥有一个账户？请 <RouterLink class="link" to="/login-email">登录</RouterLink></span>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { register } from '../assets/utils/authen'
const router = useRouter()
const user = ref({
  username: '',
  email: '',
  password: null,
  confirmPassword: null,
  isAgree: false,
})

const submit = async () => {
  if (user.value.isAgree === false) {
    alert('请先同意用户协议')
    return
  }
  if (user.value.password.length < 6) {
    alert('密码长度不足')
    return
  }
  if (user.value.password !== user.value.confirmPassword) {
    alert('两次密码不一致')
    return
  }
  const res = await register(user.value)
  if (res) {
    router.replace('/menu')
    // localStorage.setItem('user', JSON.stringify(user.value))
  }
}
</script>

<style scoped>
.register-email-view {
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
  margin-bottom: var(--p-m-g);
}

img {
  width: calc(3*var(--el-h));
  aspect-ratio: 1;
  border-radius: 50%;
}

.item .iconfont {
  position: absolute;
  right: var(--p-m-g);
}

.link,
.item a {
  color: var(--main-color);
  text-decoration: underline;
}

.submit-btn,
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  height: var(--el-h);
  background-color: #eee;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  border-radius: 20px;
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
</style>