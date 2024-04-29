<script setup lang="ts">
import type { Job, OrderTerm } from '@/type/job'
import { computed } from 'vue'

// 1.
// defineProps({
//   jobs: {
//     type: Array as () => Job[],
//     required: true
//   }
// })

// 2.
// export interface JobList {
//   jobs?: Job[]
//   orderBy: OrderTerm
// }

// withDefaults(defineProps<JobList>(), {
//   jobs: undefined,
//   orderBy: 'id'
// })

const props = defineProps<{
  jobs: Job[]
  orderBy: OrderTerm
}>()

const orderValue = computed(() => {
  return [...props.jobs].sort((a: Job, b: Job) => {
    return a[props.orderBy] > b[props.orderBy] ? 1 : -1
  })
})
</script>

<template>
  <div class="job-list">
    <p class="order">Order By {{ orderBy }}</p>
    <transition-group name="list" tag="div">
      <div v-for="job in orderValue" :key="job?.id" class="job-box">
        <div class="job-detail">
          <h2>{{ job?.title }}</h2>
          <p>{{ job?.location }}</p>
        </div>
        <p class="job-salary">{{ job?.salary }} rupees</p>
        <p
          class="job-description"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nihil at fugiat provident repellat aut reiciendis deleniti id, sed consequatur tempora, officia impedit, ullam reprehenderit corporis asperiores quas. Doloribus, tempora.</p>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.job-box {
  border-radius: 12px;
  background: rgba(250, 128, 114, 0.1);
  padding: 16px 24px;
  margin: 20px 28px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.job-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-detail p {
  color: #333;
}

.job-salary {
  font-weight: 900;
  color: blue;
  padding: 8px 0;
}

.job-description {
  color: #747474;
}

.order {
  font-size: 14px;
  padding: 0 40px;
  color: brown;
  font-weight: 600;
}

.list-move {
  transition: all 1s;
}
</style>