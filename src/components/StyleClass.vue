<template>
  <div>
    <!-- style  -->
    <h3 style="color:red">Hello</h3>
    <h3 :style="{color:'red'}">Hello</h3>
    <h3 :style="{color:'red',backgroundColor:'white'}">Hello</h3>
    <h3 :style="{color:'red','background-color':'yellow'}">Hello</h3>
    <h3 :style="styleObj">Hello</h3>
    <h3 :style="[styleObj,styleObj1]">Hello</h3>
    <!-- class -->
    <h3 class="className">Hello</h3>
    <h3 :class="'className'">Hello</h3>
    <h3 :class="classNameBind">Hello</h3>
    <h3 :class="{'className':active}">Hello</h3>
    <h3 :class="[active?'className1':'className']">Hello</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";

let styleObj = { color: "green", backgroundColor: "white" };
let styleObj1 = {"font-size": "30px"};

let classNameBind = 'className';
let active = ref(false);
setTimeout(() => {
    active.value = true;
}, 3000);
</script>

<style scoped>
.className{
    color: pink;
    border-bottom: 1px solid whitesmoke;
}
.className1{
    color: greenyellow;
    border-bottom: 1px solid orangered;
}
</style>