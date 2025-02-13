<template>
  <div class="test">

  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
const axios = inject('axios')

onMounted(() => {
  // url 1
  axios.get('/api/get')
    // url 2
    // axios.get('/goods.json')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
})

</script>

<style scoped></style>