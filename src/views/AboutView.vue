<script lang="ts">
import type { PropType } from 'vue'
import type { Job } from '@/type/job'

export default {
  data() {
    return {
      age: 10 as string | number
    }
  },
  props: {
    jobs: {
      required: false,
      type: Array as PropType<Job[]>
    }
  },
  methods: {
    increment() {
      this.age = 'Hello'
    }
  }
}
</script>

<template>
  <div>jaimi</div>
</template>