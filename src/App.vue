<script setup>
import {nextTick, reactive} from "vue";

const state = reactive({
  count: 0,
});

const increaseCount = () => {
  state.count++;

  nextTick(() => {
    console.log(document.getElementById("count").innerText);
  });
};

const decreaseCount = () => {
  state.count--;

  nextTick(() => {
    console.log(document.getElementById("count").innerText);
  });
};
</script>

<template>
  <div>
    <h1>숫자의 수</h1>
    <br />
    <hr />
    <ul>
      <li id="count">현재의 수: {{ state.count }}</li>
    </ul>
    <hr />
    <br />
    <button @click="increaseCount()">숫자 올라가!</button>
    <button @click="decreaseCount()">숫자 내려가!</button>
  </div>
</template>