<template>
  <div class="test">

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/assets/utils/supabase';
const coffee = ref([])
onMounted(async () => {
  // let { data, error } = await supabase
  //   .from('coffee')
  //   .select('*')
  // coffee.value = data
  // console.log(coffee.value);
  let { data, error } = await supabase
    .from('coffee')
    .select('*')
    .eq('id', 1)
  console.log(data);
})
</script>

<style scoped></style>