<template>
  <div class="computed">
    <input type="number" v-model="num">
    <div>{{ num }} is {{ num % 2 ? 'odd' : 'even' }}</div>
    <div>{{ num }} is {{ res }}</div>
    <div>{{ gender }} is {{ genderStr }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const num = ref(0);
const gender = ref(1);
const res = computed(() => num.value % 2 === 0 ? 'even' : 'odd')
const genderStr = computed(() => gender.value ? 'male' : 'female')
</script>

<style scoped></style>