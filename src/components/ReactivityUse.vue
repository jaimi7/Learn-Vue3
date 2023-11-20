<template>
  <div>
    <!-- Reactivity : reactive -->
    obj : {{ obj }}
    <p>Sum : {{ obj.a + obj.b }}</p>
    <!-- Reactivity : reactive : deep reactivity  -->
    <p>
      <b>arr : {{ arr }}</b>
    </p>

    <!-- Reactivity : ref -->
    <p>count : {{ count }}</p>
    <p>object.count : {{ object1.count }}</p>
    <p>object.count : {{ object2.count }}</p>
    <p>object.count : {{ object2.count }}</p>

    <!-- Reactivity : ref : distructure -->
    <p>distructure : {{ distructure }}</p>

    <!-- use as expretion  -->
    <p>object.count : {{ object2.count.value + 10 }}</p>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const obj = reactive({ a: 10, b: 20 });
setTimeout(() => {
  obj.a = 30;
}, 2000);

const arr = reactive([{ count: 10 }, [1, 2, 3]]);
setTimeout(() => {
  arr[0].count = 30;
  arr[1].push(10);
}, 2000);

const count = ref(0);
setTimeout(() => {
  count.value = 30;
}, 2000);

const object1 = ref({ count: 0 });
setTimeout(() => {
  object1.value.count = 30;
}, 2000);

const object2 = { count: ref(0) };
setTimeout(() => {
  object2.count.value = 30;
}, 2000);

const object = { distructure: ref(0) };
setTimeout(() => {
    object.count.value = 30;
}, 2000);
let { distructure } = object;
</script>