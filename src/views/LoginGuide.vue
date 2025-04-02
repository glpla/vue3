<template>
  <div class="w login-guide flex">
    <img src="@/assets/login.png" alt="">
    <button class="btn email" style="--color:#5e4435" @click.stop="$router.push('/login-email')">邮件登录</button>
    <button class="btn cell" style="--color:#0022aa" @click.stop="$router.push('/login')">手机号安全登录</button>
    <button class="btn wx" style="--color:#3ac13c">一键登录</button>
    <div class="ipt">
      <input type="checkbox" class="cb-custom" id="cb">
      <label for="cb">我已经阅读并同意
        <a href="">《瑞幸咖啡用户协议》</a> 、<a href="">《瑞幸咖啡隐私权政策》</a></label>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.login-guide {
  flex-direction: column;
  gap: calc(2*var(--p-m-g));
  padding: calc(4*var(--p-m-g)) calc(2*var(--p-m-g));
  height: 100vh;
  margin: 0;
}

.login-guide img {
  max-width: 80%;
}


button {
  width: 80%;
  height: var(--el-h);
  border-radius: 2rem;
  background-color: var(--color);
  color: #fff;
}

.email {
  margin-top: auto;
}

.ipt {
  margin-top: auto;
}

input {
  vertical-align: middle;
}

a {
  color: var(--main-color);
}
</style>