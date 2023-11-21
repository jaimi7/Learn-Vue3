<script setup>
import ReactivityUse from "./ReactivityUse.vue";
import MethodsComputed from "./MethodsComputed.vue";
import StyleClass from "./StyleClass.vue";
import AttClassBinding1 from "./AttClassBinding1.vue";
import AttClassBinding2 from "./AttClassBinding2.vue";
import AttClassBinding3 from "./AttClassBinding3.vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <ReactivityUse />
    <MethodsComputed />
    <StyleClass />
    <AttClassBinding1 class="red-class" />
    <AttClassBinding2 class="red-class" />
    <AttClassBinding3 class="red-class" />
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a
        href="https://vitejs.dev/"
        target="_blank"
        rel="noopener"
      >Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.red-class{
  color: red;;
}
</style>
