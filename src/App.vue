<script setup>
import {onUpdated, reactive} from 'vue';

// 반응형 상태
const state = reactive({
  message: 'HIHI!'
});

onUpdated(() => {
  console.log(document.getElementById('btn').innerText)
});
</script>

<template>
  <button id="btn" @click="state.message='HI!'">{{ state.message }}</button>
</template>