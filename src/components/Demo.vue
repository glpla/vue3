<template>
  <div> {{ tmp }} </div>
  <button @click="inc">inc</button>
</template>

<script setup>
const props = defineProps(['tmp'])
const inc = () => {
  props.tmp++
}
</script>

<style scoped></style>