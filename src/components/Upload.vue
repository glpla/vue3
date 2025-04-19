<template>
  <div class="upload">
    <div class="loading flex-center" v-show="isLoading">loading...</div>
    <img :src="src" alt="">
    <input type="file" @change="selectFile">
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/assets/utils/supabase'
const src = ref('/avatar.png')
const isLoading = ref(false)
const selectFile = async (e) => {
  isLoading.value = true
  const avatarFile = e.target.files[0]
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload('public/avatar1.png', avatarFile, {
      upsert: true
    })
  if (error) {
    console.log('error', error);
  } else {
    console.log('data', data);
    src.value = URL.createObjectURL(avatarFile);
  }
  isLoading.value = false
}

// try-catch
// const selectFile = async (e) => {
//   isLoading.value = true
//   try {
//     const avatarFile = e.target.files[0]
//     const { data, error } = await supabase.storage
//       .from('avatars')
//       .upload('public/avatar1.png', avatarFile, {
//         upsert: true
//       })
//     if (error) {
//       throw error // 抛出错误以便在 catch 块中处理
//     }
//     console.log('data', data);
//     src.value = URL.createObjectURL(avatarFile);
//   } catch (error) {
//     console.error('error', error)
//   } finally {
//     isLoading.value = false
//   }
// }

</script>

<style scoped>
.loading {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
}
</style>