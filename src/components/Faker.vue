<template>
  <div class="faker">
    <div>{{ randomName }}</div>
    <div>{{ randomEmail }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
console.log(faker.lorem.words(5));
console.log(faker.person.jobDescriptor());
(async () => {
  let res = await fetch('https://glpla.github.io/utils/data/cart.json')
  let data = await res.json()
  console.log(data);
})()
</script>

<style scoped></style>