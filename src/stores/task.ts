import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/type/task'

export const useTaskStore = defineStore('taskStore', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  // Task

  const tasks = ref<Task[]>([
    {
      title: 'Designer',
      isFav: true,
      id: 1
    },
    {
      title: 'Tester',
      isFav: true,
      id: 2
    },
    {
      title: 'Devops',
      isFav: false,
      id: 3
    },
    {
      title: 'Manager',
      isFav: true,
      id: 4
    },
    {
      title: 'Developer',
      isFav: false,
      id: 5
    },
    {
      title: 'Lead',
      isFav: false,
      id: 6
    },
    {
      title: 'Business Analyst',
      isFav: true,
      id: 7
    }
  ])

  const favoriteTask = computed(() => tasks.value.filter((e) => e.isFav))

  function addNewTask(task: Task) {
    tasks.value.unshift(task)
  }

  function deleteTask(id: number) {
    tasks.value = tasks.value.filter((e) => e.id != id)
  }

  function addToFavorite(id: number) {
    const arr: Task[] = tasks.value.map((e) => {
      if (e.id == id) e.isFav = !e.isFav
      return e
    })
    tasks.value = arr
  }

  return {
    count,
    doubleCount,
    increment,
    tasks,
    favoriteTask,
    addNewTask,
    deleteTask,
    addToFavorite
  }
})
