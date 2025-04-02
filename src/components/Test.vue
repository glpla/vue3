<template>
  <div class="test">
    <form @submit.prevent="submit">
      <input type="text" required maxlength="16" v-model="formData.msg">
      <br>
      <label><input type="radio" name="gender" v-model="formData.gender" value="male">male</label>
      <label><input type="radio" name="gender" v-model="formData.gender" value="female">female</label>
      <br>
      <label><input type="checkbox" name="hobby" v-model="formData.hobby" value="code">code</label>
      <label><input type="checkbox" name="hobby" v-model="formData.hobby" value="sing">sing</label>
      <br>
      <select v-model='formData.sel'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
      <br>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const formData = ref({
  msg: '',
  gender: '',
  hobby: [],
  sel: '2'
})
const submit = () => {
  console.log('formData:', formData.value);
};
</script>

<style scoped>
.guarantee {
  display: flex;
  justify-content: space-between;
}

.modal {
  position: fixed;
  inset: 0;
  background-color: rgb(0, 0, 0, 0.2);
  display: none;
}

.show {
  display: flex;
}

.cont {
  position: relative;
  background-color: #fff;
  margin: auto;
  max-width: 600px;
  padding: 20px 10px;
}

.cont .close {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>