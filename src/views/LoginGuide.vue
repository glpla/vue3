<template>
  <div class="w login-guide flex">
    <img src="@/assets/panda.png" alt="">
    <button class="btn cell f-s-m" style="--color:#0022aa">手机号安全登录</button>
    <button class="btn wx f-s-m" style="--color:#41b883">一键登录</button>
    <div class="ipt">
      <input type="checkbox" name="" id="cb">
      <label for="cb">我已经阅读并同意<span>《瑞幸咖啡用户协议》</span> 、<span>《瑞幸咖啡隐私权政策》</span></label>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.login-guide {
  flex-direction: column;
  gap: calc(2*var(--p-m-g));
  padding: var(--p-m-g);
  height: 100vh;
}

.login-guide img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

button {
  width: 80%;
  height: 4rem;
  border-radius: 2rem;
  background-color: var(--color);
  color: #fff;
}

.ipt {
  margin-top: auto;
}

label span {
  color: var(--main-color);
}
</style>