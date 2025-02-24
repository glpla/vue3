<template>
  <div class="w login-guide flex">
    <img src="@/assets/R-C.png" alt="">
    <button class="btn cell f-s-m" style="--color:#0022aa" @click.stop="$router.push('/login')">手机号安全登录</button>
    <button class="btn wx f-s-m" style="--color:#41b883">一键登录</button>
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
  padding-left: var(--p-m-g);
  padding-right: var(--p-m-g);
  height: 100vh;
  background-color: #fff;
  padding-top: 10rem;
}

.login-guide img {
  max-width: 80%;
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

.cell {
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