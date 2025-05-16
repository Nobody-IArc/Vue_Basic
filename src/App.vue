<script setup>
import {ref} from "vue";

const count = ref(0);

const increaseCount = () => {
  count.value++;
  console.log(`count is increased to ${count}`);
};

const decreaseCount = () => {
  count.value--;
  console.log(`click is decreased to ${count}`);
};
</script>

<template>
  <div>
    <h1>Button click</h1>
    <br />
    <hr />
    <ul>
      <li id="count">숫자 세기 - {{ count }}</li>
    </ul>
    <hr />
    <br />
    <button @click="increaseCount()">숫자 세기 증가</button>
    <button @click="decreaseCount()">숫자 세기 감소</button>
  </div>
</template>