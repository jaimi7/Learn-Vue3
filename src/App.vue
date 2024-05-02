<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/task">Task</RouterLink>
    <RouterLink to="/tailwind">Tailwind</RouterLink>
    <RouterLink to="/daisyui">Daisy UI</RouterLink>
    <RouterLink to="/flowbite">Flow Bite</RouterLink>
    <RouterLink to="/vuetify">Vuetify</RouterLink>
    <RouterLink to="/vee-validate">Validate</RouterLink>
  </nav>

  <RouterView />
</template>