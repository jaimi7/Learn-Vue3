<script setup lang="ts">
import { computed, ref } from 'vue'
import type { FilterTerm } from '@/type/task'
import TaskList from '@/components/task/TaskList.vue'
import CreateTask from '@/components/task/CreateTask.vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore()

// const tasks = computed(() => taskStore.tasks)
// const favoriteTask = computed(() => taskStore.favoriteTask)
const { tasks, favoriteTask } = storeToRefs(taskStore)

const filter = ref<FilterTerm>('all')

function handleClick(value: FilterTerm) {
  filter.value = value
}
</script>

<template>
  <div>
    <CreateTask />
    <div class="actions-btn">
      <button :class="{'active-btn': filter=='all'}" @click="handleClick('all')">All Task</button>
      <button :class="{'active-btn': filter=='fav'}" @click="handleClick('fav')">Favorite Task</button>
      <button :class="{'active-btn': filter=='fav'}" @click="taskStore.$reset">Reset Task</button>
    </div>
    <TaskList v-if="filter=='all'" :tasks />
    <TaskList v-if="filter=='fav'" :tasks="favoriteTask" />
  </div>
</template>

<style scoped>
.actions-btn {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.actions-btn button {
  border: 1px solid rgb(86, 158, 52);
  outline: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  background: rgb(86, 158, 52);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}

.active-btn,
.actions-btn button:hover {
  color: rgb(86, 158, 52) !important;
  background: #fff !important;
}
</style>