<script setup>
import { ref } from 'vue';
const msg = ref({
  nickname: '',
  email: '',
  msg: ''
})
</script>

<template>
  <div class="model">
    <form>
      <h1>Message Me</h1>
      <div class="ipt-box">
        <input type="text" required maxlength="10" v-model="msg.nickname">
        <div class="label">nickname</div>
      </div>
      <div class="ipt-box">
        <input type="email" required maxlength="30" v-model="msg.email">
        <div class="label">email</div>
      </div>
      <div class="ipt-box">
        <textarea required maxlength="60" v-model="msg.msg"></textarea>
        <div class="label">Message</div>
      </div>
      <button type="submit">submit</button>
      <button type="reset">reset</button>
    </form>
  </div>
</template>

<style scoped>
input {
  outline: none;
  width: 100%;
  border: 1px solid #eee;
  background-color: transparent;
  height: 40px;
  padding: 0 10px;
  font: inherit;
}

textarea {
  outline: none;
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #eee;
  background-color: transparent;
  resize: none;
  font: inherit;
}

input:focus,
input:valid,
textarea:focus,
textarea:valid {
  border: 1px solid var(--main-color);
}

button {
  width: 100%;
  height: 40px;
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
  color: #fff;
  font: inherit;
  text-transform: capitalize;
}

form {
  --main-color: hsla(160, 100%, 37%, 1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 96%;
  max-width: 600px;
}

.ipt-box {
  position: relative;
  width: 100%;
}

.label {
  position: absolute;
  right: 10px;
  top: -10px;
  padding: 0 10px;
  line-height: 20px;
  background-color: #fff;
  text-transform: capitalize;
}
</style>
