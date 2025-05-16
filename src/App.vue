<script setup>
const fruits = ['Apple', 'Banana', 'Orange'];
</script>

<template>
  <template v-for="(f, idx) in fruits">{{ idx }} {{ f }}</template>
</template>