<template>
  <div class="login-view">
    <img class="img" src="@/assets/logo.png" alt="">
    <h3>大树</h3>
    <p>欢迎回来</p>
    <div class="ipt-box">
      <input class="ipt" type="tel" placeholder="请输入手机号" maxlength="11" v-model="user.tel" required></input>
      <span class="iconfont icon-guanbi_o cell" :class="{ 'show': user.tel.length }" @click.stop="user.tel = ''"></span>
    </div>
    <div class="ipt-box">
      <input class="ipt" type="text" placeholder="请输入手机验证码" maxlength="6" v-model="user.code" required
        pattern="\d{6}"></input>
      <span class="code" :class="{ 'show': user.tel.length }" @click="sendVerificationCode">获取验证码</span>
    </div>
    <div class="ipt">
      <input type="checkbox" class="cb-custom" id="cb" v-model="user.agree">
      <label for="cb">我已经阅读并同意
        <a href="">《瑞幸咖啡用户协议》</a> 、<a href="">《瑞幸咖啡隐私权政策》</a></label>
    </div>
    <button class="f-s-m" @click="submit">确定</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const user = ref({
  tel: '',
  code: '',
  agree: false
})
const sendVerificationCode = () => {
  if (user.value.tel.length !== 11) {
    alert('请输入正确的手机号')
    return
  }
  alert('验证码已发送')
}

const submit = () => {
  if (user.value.tel.length !== 11) {
    alert('请输入正确的手机号')
    return
  }
  if (user.value.code.length !== 6) {
    console.log(user.value.code);

    alert('请输入正确的验证码')
    return
  }
  if (!user.value.agree) {
    alert('请先阅读并同意用户协议和隐私政策')
    return
  }
  // 这里可以添加登录逻辑
  alert('登录成功')
}
</script>

<style scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 6rem var(--p-m-g);
  background-color: #fff;
  gap: var(--p-m-g);
}

.img {
  width: 120px;
}

.ipt-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
  height: var(--el-h);
  background-color: var(--second-bg-color);
  border-radius: var(--el-h);
}

.ipt-box input {
  height: 100%;
  padding: 0 var(--p-m-g);
}

.ipt-box span {
  position: absolute;
  right: var(--p-m-g);
}

.cell {
  display: none;
  font-size: 2rem;
}

.cell.show {
  display: block;
}

.code {
  color: #666;
  cursor: pointer;
}

.code.show {
  color: var(--main-color);
}

button {
  width: 100%;
  background-color: var(--main-color);
  opacity: 0.6;
  height: var(--el-h);
  border-radius: var(--el-h);
  color: #fff;
}

a {
  color: var(--main-color);
}
</style>