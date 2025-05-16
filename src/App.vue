<script setup>
// const message = " Vue 3";
// const message = { name: 'World', age: 30 };
const page = "history";
let loading = true;
</script>

<template>
<!--  <div v-bind:id="page">-->
<!--    HISTORY MAKIN-->
<!--&lt;!&ndash;    <span>Hello </span>&ndash;&gt;-->
<!--&lt;!&ndash;    <span v-text="JSON.stringify(message)"></span>&ndash;&gt;-->
<!--  </div>-->
  <input type="text" placeholder="ID" :readonly="loading" />
  <input type="password" placeholder="Password" :readonly="loading" />
  <button :disabled="loading">로그인</button>
</template>