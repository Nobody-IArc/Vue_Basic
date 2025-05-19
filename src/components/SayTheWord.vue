<script setup>
import {onMounted, onUnmounted} from 'vue';
onMounted(() => {
  console.log('OnMounted', document.getElementById('theWord'));
});

onUnmounted(() => {
  console.log('OnUnMounted', document.getElementById('theWord'));
});
</script>

<template>
  <div id="theWord">Hello</div>
</template>