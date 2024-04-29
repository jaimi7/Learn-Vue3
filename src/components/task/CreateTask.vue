<script setup lang="ts">
import { ref } from 'vue'

import { useTaskStore } from '@/stores/task'
const taskStore = useTaskStore()

import type { Task } from '@/type/task'

const task = ref<String>('')

async function createTask() {
  let newTask: Task = {
    title: task.value,
    isFav: false,
    id: Math.random()
  }
  await taskStore.addNewTask(newTask)
  task.value = ''
}
</script>

<template>
  <div class="create-task">
    <input v-model="task" placeholder="Add task title" />
    <button @click="createTask()">Add</button>
  </div>
</template>

<style scoped>
.create-task {
  display: flex;
  justify-content: center;
}
.create-task input {
  border: 1px solid rgb(86, 158, 52);
  outline: none;
  padding: 8px;
  border-radius: 0;
  font-size: 16px;
  width: 360px;
}
.create-task button {
  background-color: rgb(86, 158, 52);
  color: white;
  border: 1px solid rgb(86, 158, 52);
  outline: none;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 16px;
  cursor: pointer;
}

.create-task button:hover {
  background-color: white;
  color: rgb(86, 158, 52);
}
</style>