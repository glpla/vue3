<template>
  <div class="test">
    <DefineModel v-model="count" />
    <div @click="count++">{{ count }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DefineModel from './DefineModel.vue';
let count = ref(0)

</script>

<style scoped></style>