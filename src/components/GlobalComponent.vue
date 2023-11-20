<template>
  <!-- text interpolation  -->
  <div>
    {{msg}}
    <p>{{ 10+19 }}</p>
    <!-- Attribute Binding  -->
    <a :href="googleUrl">Use Google</a>
    <br />
    <a v-bind:href="googleUrl" target="_blank">Use Google - target</a>
    <!-- Use Multiple Attribute  -->
    <p v-bind="style">Hello style</p>
    <!-- Use Dynamic Attribute  -->
    <p v-bind:[styleName]="'colour-pink'">Pink</p>
    <p :[styleName]="'colour-yellow'">Pink</p>
    <p></p>
  </div>
</template>

<script setup>
const msg = "Hello, there !";
const googleUrl = "https://www.google.co.in/";
const style = {
  id: "style",
  class: "colour",
};
const styleName = "class";
</script>

<style scoped>
.colour{
  color: red;
}
.colour-pink{
  color: palevioletred;
}
.colour-yellow{
  color: yellowgreen;
}
</style>