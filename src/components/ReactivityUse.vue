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

    <!-- Reactivity : ref : distructure -->
    <p>distructure : {{ distructure }}</p>

    <!-- Reactivity : ref : use as expretion  -->
    <p>object.count : {{ object2.count.value + 10 }}</p>

    <!-- Reactivity : methods -->
    <p>{{ reactivityMethod() }}</p>
  </div>
</template>

<script setup>
import {
  isProxy,
  isReactive,
  isRef,
  reactive,
  ref,
  toRef,
  toRefs,
  unref,
} from "vue";

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

function reactivityMethod() {
  console.log("Reactivity : Methods");
  console.log("isRef", isRef(obj));
  console.log("isReactive", isReactive(obj));
  console.log("isProxy,obj", isProxy(obj));
  console.log("isProxy,count", isProxy(count));
  console.log("unref,obj", unref(obj));
  console.log("unref,count", unref(count));
  console.log("obj", obj);
  console.log("isReactive,obj", isReactive(obj));
  console.log("isReactive,obj.a", isReactive(obj.a));
  console.log("isRef,obj.a", isRef(obj.a));

  let toRefUse = toRef(obj, "a");
  console.log("toRefUse", toRefUse);
  console.log("toRefUse.value", toRefUse.value);
  console.log("isRef,toRefUse", isRef(toRefUse));

  let toRefsUse = toRefs(obj);
  console.log("toRefsUse", toRefsUse);
  console.log("isRef,toRefsUse", isRef(toRefsUse));
  console.log("toRefsUse.a", toRefsUse.a);
  console.log("toRefsUse.a.value", toRefsUse.a.value);
  console.log("isRef,toRefsUse.a", isRef(toRefsUse.a));
  console.log("toRefsUse.b", toRefsUse.b);
  console.log("toRefsUse.b.value", toRefsUse.b.value);
  console.log("isRef,toRefsUse.b", isRef(toRefsUse.b));
}
</script>