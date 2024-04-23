<script lang="ts">
export default {
  data() {
    return {
      age: 10 as string | number
      // in set up
      // const age =ref<string | number>(25);
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