<script setup>
import {reactive} from "vue";

const state = reactive({
  form: {
    id: "",
    pw: ""
  }
});

const login = () => {
  window.alert(state.form.id + "님 로그인 완료");
}
</script>

<template>
  <form @submit.prevent="login">
    <input type="text" v-model="state.form.id" placeholder="아이디" />
    <input type="password" v-model="state.form.pw" placeholder="비밀번호" />

    <button type="submit">Login</button>
  </form>
</template>