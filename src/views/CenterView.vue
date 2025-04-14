<template>
  <div class="center-view">
    <div class="item">
      <span>头像</span>
      <!-- <input type="file" @change="handleAvatarImg"> -->
      <img :src="user?.user_metadata?.avatar" alt="" v-show="user">
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>邮箱</span>
      <span>{{ user.email }}</span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>用户名</span>
      <span>glpla.github.io</span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>性别</span>
      <span>男</span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>我的幸运日</span>
      <span>19xx-xx-xx</span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>关联手机</span>
      <span>137-xxxx-xxxx</span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>收货地址</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>账号管理</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>免密支付</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>通用设置</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <div class="item">
      <span>协议与说明</span>
      <span></span>
      <span>&gt;</span>
    </div>
    <button class="btn" @click="logOut">退出登录</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/assets/utils/supabase';
import { useRouter } from 'vue-router';
const router = useRouter();
const user = ref({});
const src = ref('')
const handleAvatarImg = async (e) => {
  const avatarFile = e.target.files[0]
  src.value = URL.createObjectURL(avatarFile);
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload('avatar.jpg', avatarFile, {
      upsert: true
    })
  if (error) {
    console.log(error);
    return
  }
  console.log('upload', data);
  return data;
}
const uploadAvatarImg = async () => {
  const avatarFile = event.target.files[0]
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload('public/avatar.png', avatarFile)
  if (error) {
    console.log(error);
    return
  }
  return data;
};
const logOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log(error);
  } else {
    console.log('已退出登录');
    router.replace('/')
  }
}
onMounted(async () => {
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    console.log(error);
  } else {
    console.log('data', data);
    user.value = data.session.user
    console.log('user', user.value);
    console.log(user.value.user_metadata.avatar);
  }
})
</script>

<style scoped>
.center-view {
  padding: var(--p-m-g);
  margin: var(--p-m-g);
}

.item {
  display: flex;
  align-items: center;
  gap: var(--p-m-g);
  line-height: 4rem;
}

.item span:first-child {
  margin-right: auto;
}

.item img {
  width: 4rem;
  border-radius: 50%;
}

.btn {
  position: fixed;
  left: var(--p-m-g);
  right: var(--p-m-g);
  bottom: var(--p-m-g);
  background-color: var(--main-color);
  color: #fff;
  height: 40px;
  border-radius: 20px;
}
</style>