<template>
  <div class="contact-view register">
    <form class="form" @submit.prevent="submitForm">
      <h2 class="title">contact us</h2>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-gerentouxiang_o"></span></label>
        <input class="ipt" type="text" placeholder="your nickname" maxlength="12" name="upass"
          v-model="user.nickname"></input>
      </div>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-youjian_o"></span></label>
        <input class="ipt" type="email" placeholder="your email" maxlength="18" name="umail"
          v-model="user.email"></input>
      </div>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-xiaoxi_o"></span></label>
        <textarea class="msg" placeholder="your message" v-model="user.msg" maxlength="30"></textarea>
      </div>
      <div class="ipt-box">
        <button type="submit" class="btn submit-btn">submit</button>
        <button type="reset" class="btn reset-btn" @click="resetForm">reset</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const user = ref({
  nickname: '',
  email: '',
  msg: '',
})
const submitForm = () => {
  // todo
  console.log(user.value)
}
const resetForm = () => {
  user.value = {
    nickname: '',
    email: '',
    msg: '',
  }
}
</script>

<style scoped>
@import url(../assets/form.css);
</style>