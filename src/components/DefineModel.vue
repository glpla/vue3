<template>
  <div class="define-model">
    <div>define-model</div>
    <div @click="update">{{ model }}</div>

  </div>
</template>

<script setup>
const model = defineModel()
const update = () => model.value++

</script>

<style scoped></style>