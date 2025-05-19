<script setup>
import {reactive} from "vue";

const state = reactive({
  player: "Arthur"
});
</script>

<template>
  <div>
    <h1>{{ state.player }}</h1>
    <input type="text" v-model="state.player" />
  </div>
</template>