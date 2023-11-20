<template>
  <div>
    <!-- Reactivity : reactive -->
    {{ obj }}
    <p>Sum : {{ obj.a + obj.b }}</p>
    <!-- Reactivity : reactive : deep reactivity  -->
    <p>
      <b>{{ arr }}</b>
    </p>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const obj = reactive({ a: 10, b: 20 });
setTimeout(() => {
  obj.a = 30;
}, 2000);

const arr = reactive([{ count: 10 }, [1, 2, 3]]);
setTimeout(() => {
  arr[0].count = 30;
  arr[1].push(10);
}, 2000);
</script>