<template>
  <div class="todo">
    <h1><span class="iconfont icon-layers-fill"></span>Todo App</h1>
    <div class="todo-ipt">
      <input type="text" placeholder="Add a todo" v-model.trim="todo" maxlength="10" @keyup.enter="addTodo">
      <div class="add-btn" @click="addTodo">Add</div>
    </div>
    <div v-if="!lists.length">no records</div>
    <div v-else class="todo-list">
      <div class="todo-item" v-for="(item, ind) in lists" :class="item.isDone ? 'done' : ''">
        <div>
          <input type="checkbox" v-model="item.isDone" :id="`cb${ind}`">
          <label :for="`cb${ind}`">{{ item.msg }}</label>
        </div>
        <div class="del-btn" @click="delTodo(ind)"><span class="iconfont icon-delete-fill"></span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const todo = ref('')
const lists = ref([])
const addTodo = () => {
  if (!todo.value) return
  lists.value.push({ 'isDone': false, 'msg': todo.value })
  todo.value = ''
}
const delTodo = (ind) => lists.value.splice(ind, 1)

</script>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.todo-ipt {
  display: flex;
  border: 1px solid #f40;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
}

.todo-ipt input {
  border: none;
  outline: none;
  height: 100%;
  flex: 1;
  padding-left: 10px;
}

.todo-ipt .add-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
  background-color: #f40;
  color: #fff;
}

.todo-list {
  flex: 1;
  overflow-y: auto;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  line-height: 3;
}

.todo-item input {
  margin-right: 10px;
  accent-color: #f40;
}

.done {
  color: #999;
}

.done input {
  accent-color: #999;
}

.done label {
  text-decoration: line-through;
}
</style>