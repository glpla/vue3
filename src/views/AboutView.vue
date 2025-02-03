<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route);

</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>path:{{ $route.fullPath }}</div>
    <div>{{ route.params?.id }}</div>
  </div>
</template>

<style></style>
