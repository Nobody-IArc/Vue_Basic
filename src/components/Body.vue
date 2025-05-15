<script setup>
import Cover from '@/components/Cover.vue';
</script>

<template>
  <div class="body">
    <span>Body Part</span>
    <Cover color="Purple" />
  </div>
</template>

<style scoped>
.body {
  border: 1px solid red;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}
</style>