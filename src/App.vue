<script setup>
let loading = true;
</script>

<template>
  <template v-if="loading">On Loading...</template>
  <template v-else>Loading Finished!</template>
  <div v-show="loading">On Loading...</div>
<!--  소스 코드에서는 출력되는 v-show -->
  <div v-show="!loading">On Loading...</div>
</template>