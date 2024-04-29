<script setup lang="ts">
import type { Task } from '@/type/task'

import { useTaskStore } from '@/stores/task'
const taskStore = useTaskStore()

const props = defineProps<{
  tasks: Task[]
}>()
</script>

<template>
  <div class="task-list">
    <div class="order">
      <p>Total task : {{ tasks.value }}</p>
    </div>
    <transition-group name="list" tag="div" class="task-listing">
      <div
        v-for="task in tasks"
        :key="task?.id"
        :class="{'favorite-task':task.isFav}"
        class="task-box"
      >
        <div class="task-detail">
          <h2>{{ task?.title }}</h2>
          <button @click="taskStore.deleteTask(task.id)">Delete</button>
        </div>
        <p
          class="task-like"
          @click="taskStore.addToFavorite(task.id)"
        >{{ task?.isFav ? "Remove From Like" : "Like This Task" }}</p>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.task-listing {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

.task-box {
  border-radius: 12px;
  background: rgba(137, 221, 98, 0.1);
  padding: 8px 16px;
  margin: 20px 1%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 23%;
}

.task-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-detail button {
  background-color: rgb(255, 81, 81);
  color: white;
  border: 1px solid rgb(255, 81, 81);
  outline: none;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 10px;
}

.task-detail button:hover {
  background-color: white;
  color: rgb(255, 81, 81);
}

.task-like {
  font-weight: 900;
  color: rgb(255, 129, 255);
  cursor: pointer;
  font-size: 12px;
}

.order {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order p {
  font-size: 14px;
  padding: 0 40px;
  color: rgb(11, 124, 11);
  font-weight: 600;
}

.list-move {
  transition: all 1s;
}

.favorite-task {
  background: rgb(137, 221, 98, 0.25);
}
</style>