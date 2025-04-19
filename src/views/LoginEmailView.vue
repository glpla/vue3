<template>
  <div class="login-view">
    <img src="/xh.jpg" alt="">
    <h3 class="title f-b">广州新华学院</h3>
    <p class="greeting">欢迎回来</p>
    <form @submit.prevent="submit">
      <div class="item">
        <input type="email" v-model.trim.lazy="user.email" required maxlength="30" placeholder="电子邮件">
        <span class="iconfont icon-youjian_o"></span>
      </div>
      <div class="item">
        <input type="password" v-model.trim.lazy="user.password" required maxlength="20" placeholder="密码，最少6位">
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
        <button class="submit-btn" type="submit">登录</button>
      </div>
      <!-- <div class="item">
        <button class="submit-btn" type="button" @click="getSession">获取会话</button>
      </div> -->
    </form>
    <span class="warn" @click="retrivePassword">忘记密码？</span>
    <span>还没有账户？请 <RouterLink class="link" to="/register-email">注册</RouterLink></span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { login } from '../assets/utils/authen'
import { supabase } from '@/assets/utils/supabase';

const router = useRouter()
const user = ref({
  email: '',
  password: null,
  isAgree: false,
})

const submit = async () => {
  if (!user.value.isAgree) {
    alert('请先同意用户协议')
    return;
  }
  // const res = await login(user.value)
  // if (res) {
  //   router.replace('/menu')
  //   localStorage.setItem('user', JSON.stringify(user.value))
  // }
  console.log('user', user.value);


  let { data, error } = await supabase.auth.signInWithPassword({
    email: user.value.email,
    password: user.value.password,
  })

  if (error) {
    console.log('login fail', error);
  } else {
    console.log('login ok', data);
    router.replace('/menu')
  }
}


const retrivePassword = async () => {
  console.log('retrivePassword');
  if (user.value.email === '') {
    alert('请输入邮箱')
    return;
  }
  let { data, error } = await supabase.auth.resetPasswordForEmail(user.value.email)
  if (!error) {
    console.log(data);
    alert('已发送邮件，请查收')
  } else {
    console.log(error);
    alert('发送邮件失败')
  }
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