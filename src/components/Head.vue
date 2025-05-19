<script setup>
import Cover from '@/components/Cover.vue'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore();
</script>

<template>
  <div class="head">
    <span>Head Part</span>
    <Cover color="Yellow" />
    <div>TIMES: {{ counterStore.count }}</div>
    <button @click="counterStore.increment()">돌려</button>
  </div>
</template>

<style scoped>
.head {
  border: 1px solid green;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}
</style>