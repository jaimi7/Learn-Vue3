<template>
  <div>
    <!-- method  -->
    <p>fullName: {{ fullName() }}</p>
    <!-- Computed -->
    <p>computedFullName: {{ computedFullName }}</p>
    <p>computedFullName: {{ computedFullNameCount }}</p>
    <p>computedFullName: {{ count }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const fName = "Jaimi";
const lName = "Patel";

const fullName = () => {
  return fName + " " + lName;
};

const firstName = ref("Jaimi");
const lastName = ref("Patel");
setTimeout(() => {
  firstName.value = "Prince";
}, 2000);

const computedFullName = computed(() => {
  return firstName.value + " " + lastName.value;
});

let count = ref(0);
const computedFullNameCount = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
  set(newValue) {
    count.value++;
    // let arr = newValue.split(" ");
    // firstName.value = arr[0];
    // lastName.value = arr[1];
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
setTimeout(() => {
  computedFullNameCount.value = "Princess Patel";
}, 5000);
</script>