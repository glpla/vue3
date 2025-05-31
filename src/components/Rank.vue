<template>
  <div class="rank">
    <button @click="addItem">add</button>
    <button @click="delItem">del</button>
    <div>
      <li class="item leading">
        <span>usn</span>
        <span>uname</span>
        <span>ucredit</span>
      </li>
    </div>
    <FadeTransition>
      <li class="item" v-for="(item, ind) in lists" :key="item.id" :style="`--delay:${ind * 0.1}s`">
        <span>{{ item.usn }}</span>
        <span>{{ item.uname }}</span>
        <span>{{ item.ucredit }}</span>
      </li>
    </FadeTransition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import FadeTransition from './FadeTransition.vue';
const lists = ref([])
onMounted(() => {
  console.log('rank mounted');
  fetch('https://glpla.github.io/utils/data/rank/20240203.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      lists.value = data.cont.filter(item => item.ucredit >= 5)
    })
    .catch(error => console.error('Error:', error));
})
const addItem = () => {
  lists.value.unshift({
    id: Math.random(),
    usn: '20240203',
    uname: '张三',
    ucredit: (Math.random() * 100).toFixed(0)
  })
}
const delItem = () => {
  lists.value.shift()
}
</script>

<style scoped>
.rank {
  overflow-y: auto;
  overflow-x: hidden;
}

button {
  padding: 0 var(--p-m-g);
  background-color: var(--main-color);
  color: #fff;
  text-transform: capitalize;
  margin-right: var(--p-m-g);
}

.item {
  display: grid;
  grid-template-columns: 70px 1fr 70px;
  gap: var(--p-m-g);
}

.leading {
  text-transform: capitalize;
}
</style>