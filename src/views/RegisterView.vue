<template>
  <div class="register">
    <form class="form" @submit.prevent="submitForm">
      <h2 class="title">register</h2>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-gerentouxiang_o"></span></label>
        <input class="ipt" type="text" placeholder="your nickname" maxlength="12" name="uname"
          v-model.trim="user.nickname"></input>
        <span class="tips" v-if="errors.nickname">{{ errors.nickname }}</span>
      </div>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-suoding_o"></span></label>
        <input class="ipt" type="password" placeholder="your password" maxlength="12" name="upass"
          v-model.trim="user.pass"></input>
        <span class="tips" v-if="errors.pass">{{ errors.pass }}</span>
      </div>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-suoding_o"></span></label>
        <input class="ipt" type="password" placeholder="confirm your password" maxlength="12" name="upass"
          v-model.trim="user.passConfirm"></input>
        <span class="tips" v-if="errors.passConfirm">{{ errors.passConfirm }}</span>
      </div>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-youjian_o"></span></label>
        <input class="ipt" type="email" placeholder="your email" maxlength="18" name="umail"
          v-model.trim="user.email"></input>
        <span class="tips" v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-gender-male"></span></label>
        <div class="ipt-radio">
          <input type="radio" name="ugender" id="male" value="male" v-model="user.gender">
          <label for="male">male</label>
          <input type="radio" name="ugender" id="female" value="female" v-model="user.gender">
          <label for="female">female</label>
        </div>
        <span class="tips" v-if="errors.gender">{{ errors.gender }}</span>
      </div>
      <div class="ipt-box">
        <label class="leading"><span class="iconfont icon-xiai_o"></span></label>
        <div class="ipt-radio">
          <input type="checkbox" name="uhobby" id="code" value="code" v-model="user.hobbies">
          <label for="code">code</label>
          <input type="checkbox" name="uhobby" id="read" value="read" v-model="user.hobbies">
          <label for="read">read</label>
          <input type="checkbox" name="uhobby" id="sing" value="sing" v-model="user.hobbies">
          <label for="sing">sing</label>
          <input type="checkbox" name="uhobby" id="dance" value="dance" v-model="user.hobbies">
          <label for="dance">dance</label>
          <input type="checkbox" name="uhobby" id="gym" value="gym" v-model="user.hobbies">
          <label for="gym">gym</label>
        </div>
        <span class="tips" v-if="errors.hobbies">{{ errors.hobbies }}</span>
      </div>
      <div class="ipt-box">
        <input type="checkbox" v-model="user.isAgree" id="cb">
        <label for="cb">I agree to the terms and conditions.</label>
        <span class="tips" v-if="errors.isAgree">{{ errors.isAgree }}</span>
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
  pass: '',
  passConfirm: '',
  email: '',
  gender: 'male',
  hobbies: [],
  isAgree: false
})
const errors = ref({
  nickname: '',
  pass: '',
  passConfirm: '',
  email: '',
  gender: '',
  hobbies: '',
  isAgree: false
})
const submitForm = () => {
  if (!validateForm()) return
  console.log(user.value)
}
const resetForm = () => {
  user.value = {
    nickname: '',
    pass: '',
    passConfirm: '',
    email: '',
    gender: 'male',
    hobbies: [],
    isAgree: false
  }

  errors.value = {
    nickname: '',
    pass: '',
    passConfirm: '',
    email: '',
    gender: '',
    hobbies: '',
    isAgree: false
  }
}
const validateForm = () => {
  let isValid = true

  errors.value = {
    nickname: '',
    pass: '',
    passConfirm: '',
    email: '',
    gender: '',
    hobbies: ''
  }

  if (!user.value.nickname) {
    errors.value.nickname = 'Nickname is required'
    isValid = false
  }

  if (!user.value.pass) {
    errors.value.pass = 'Password is required'
    isValid = false
  }

  if (!user.value.passConfirm) {
    errors.value.passConfirm = 'Confirm password is required'
    isValid = false
  } else if (user.value.pass !== user.value.passConfirm) {
    errors.value.passConfirm = 'Passwords do not match'
    isValid = false
  }

  if (!user.value.email) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(user.value.email)) {
    errors.value.email = 'Email is invalid'
    isValid = false
  }

  if (!user.value.gender) {
    errors.value.gender = 'Gender is required'
    isValid = false
  }

  if (user.value.hobbies.length === 0) {
    errors.value.hobbies = 'At least one hobby is required'
    isValid = false
  }

  if (!user.value.isAgree) {
    errors.value.isAgree = 'You must agree to the terms and conditions'
    isValid = false
  }

  return isValid;
}
</script>

<style scoped>
@import url(../assets/form.css);
</style>