<script setup>
import Cover from '@/components/Cover.vue'
</script>

<template>
  <div class="head">
    <span>Head Part</span>
    <Cover color="Yellow" />
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