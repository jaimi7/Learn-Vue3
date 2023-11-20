<template>
  <!-- text interpolation  -->
  <div>
    {{msg}}
    <p>{{ 10+19 }}</p>
  </div>
</template>

<script setup>
const msg = "Hello, there !";
</script>