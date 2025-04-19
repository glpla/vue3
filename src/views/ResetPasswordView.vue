<template>
  <div class="reset-password-view">
    <div class="reset-password-view">
      <h3 class="title f-b">重置密码</h3>
      <form @submit.prevent="resetPassword">
        <div class="item">
          <input type="password" v-model="newPassword" required placeholder="新密码">
          <span class="iconfont icon-suoding_o"></span>
        </div>
        <div class="item">
          <input type="password" v-model="confirmPassword" required placeholder="确认新密码">
          <span class="iconfont icon-suoding_o"></span>
        </div>
        <div class="item">
          <button class="submit-btn" type="submit">重置密码</button>
        </div>
      </form>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { supabase } from '../assets/utils/supabase';

const route = useRoute();
const router = useRouter();

const newPassword = ref('');
const confirmPassword = ref('');
const message = ref('');

const resetPassword = async () => {
  if (newPassword.value !== confirmPassword.value) {
    message.value = '新密码和确认密码不一致';
    return;
  }

  const accessToken = route.query.access_token;
  const email = route.query.email;

  if (!accessToken || !email) {
    message.value = '无效的重置链接';
    return;
  }

  try {
    const { data, error } = await supabase.auth.updateUser(
      {
        email,
        password: newPassword.value,
        data: { updated: true }
      }
    );

    if (error) {
      console.error('Error updating password:', error);
      message.value = '重置密码失败，请重试。';
    } else {
      console.log('Password updated successfully:', data);
      message.value = '密码重置成功，请重新登录。';
      router.replace('/login-email');
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    message.value = '发生意外错误，请稍后再试。';
  }
};
onMounted(() => {
  console.log(route.query);
})

</script>

<style scoped></style>