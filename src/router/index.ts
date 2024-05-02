import { createRouter, createWebHistory } from 'vue-router'
import JobPost from '@/views/JobPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'job',
      component: JobPost
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('@/views/TaskView.vue')
    },
    {
      path: '/tailwind',
      name: 'tailwind',
      component: () => import('@/views/TailwindPage.vue')
    },
    {
      path: '/daisyui',
      name: 'daisyui',
      component: () => import('@/views/DaisyUI.vue')
    },
    {
      path: '/flowbite',
      name: 'flowbite',
      component: () => import('@/views/FlowBite.vue')
    },
    {
      path: '/vee-validate',
      name: 'vee-validate',
      component: () => import('@/views/VeeValidate.vue')
    }
  ]
})

export default router
