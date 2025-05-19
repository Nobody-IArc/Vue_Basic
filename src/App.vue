<script setup>
import {reactive} from "vue";
import SayTheWord from "@/components/SayTheWord.vue";

// 반응형 상태
const state = reactive({
  visible: true,
});
</script>

<template>
  <SayTheWord v-if="state.visible" />
  <button @click="state.visible = false">hide</button>
</template>