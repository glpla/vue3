<template>
  <div class="register">
    <form class="form" @submit.prevent="submitForm">
      <h2 class="title">login</h2>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-suoding_o"></span></label>
        <input class="ipt" type="password" placeholder="your password" maxlength="12" name="upass"
          v-model="user.pass"></input>
      </div>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-youjian_o"></span></label>
        <input class="ipt" type="email" placeholder="your email" maxlength="18" name="umail"
          v-model="user.email"></input>
      </div>
      <div class="ipt-box">
        <button type="submit" class="btn submit-btn">submit</button>
        <button type="reset" class="btn reset-btn" @click="resetForm">reset</button>
      </div>
      <div class="icon-box">
        <span class="iconfont icon-qq0"></span>
        <span class="iconfont icon-weixin0"></span>
        <span class="iconfont icon-twitter"></span>
        <span class="iconfont icon-sina"></span>
        <span class="iconfont icon-zhifubao0"></span>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const user = ref({
  pass: '',
  email: '',
})
const submitForm = () => {
  // todo
  console.log(user.value)
}
const resetForm = () => {
  user.value = {
    pass: '',
    email: '',
  }
}
</script>

<style scoped>
@import url(../assets/form.css);


.icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 8rem;
}

.icon-box .iconfont {
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  transition: 0.5s;
  cursor: pointer;
}

.icon-box .iconfont:hover {
  color: #fff;
  background-color: var(--main-color);
}
</style>