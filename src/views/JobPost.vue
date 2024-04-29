<script setup lang="ts">
import { ref } from 'vue'
import type { Job, OrderTerm } from '@/type/job'
import JobList from '@/components/job/JobList.vue'

const jobs = ref<Job[]>([
  { title: 'Designer', location: 'Gandhinagar', salary: 12000, id: 1 },
  { title: 'Tester', location: 'Surat', salary: 15000, id: 2 },
  { title: 'Devops', location: 'Ahmadabad', salary: 17000, id: 3 },
  { title: 'Manager', location: 'UP', salary: 21000, id: 4 },
  { title: 'Developer', location: 'Valsad', salary: 34000, id: 5 },
  { title: 'Lead', location: 'Gujarat', salary: 20000, id: 6 },
  { title: 'Business Analyst', location: 'Goa', salary: 19000, id: 7 }
])

const orderBy = ref<OrderTerm>('id')

function handleClick(value: OrderTerm) {
  orderBy.value = value
  jobs.value.sort((a, b) => b.salary - a.salary)
}
</script>

<template>
  <div>
    <div class="actions-btn">
      <button @click="handleClick('title')">Order By Title</button>
      <button @click="handleClick('salary')">Order By Salary</button>
      <button @click="handleClick('location')">Order By Location</button>
    </div>
    <JobList :jobs :orderBy />
  </div>
</template>

<style scoped>
.actions-btn {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.actions-btn button {
  border: 1px solid rgb(250, 128, 114);
  outline: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  background: rgb(250, 128, 114);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}

.actions-btn button:hover {
  color: rgb(250, 128, 114);
  background: #fff;
}
</style>