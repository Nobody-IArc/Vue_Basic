<script setup>
const pop = (message) => {
  window.alert(message);
}

const run = () => {
  window.alert('Hello World');
}
</script>

<template>
  <!-- v-on: 은 @ 기호로 대체 가능  -->
<!--  <button v-on:click="pop('Hello World')">Hello</button>-->
  <button @click="pop('Hello World')">This is Button</button>
  <button @click="pop('Hi World')">This is Button 2</button>
</template>