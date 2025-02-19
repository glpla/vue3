<template>
  <div> demo </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
  console.log(router);
})
</script>

<style scoped></style>