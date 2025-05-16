<script setup>
// const parent = "Fruits";
// const child = "iten";
// const fruits = "Apple Banana Coconut Durian";
// const fruitsArr = ["Apple", "Banana", "Coconut", "Durian"];
const visible = { fruits: true };
const hidden = { fruits: false };
// const rect = "background:blue;width:200px;height:200px;"
const rect = {
  background: "blue",
  width: "200px",
  height: "200px",
}
</script>

<template>
<!--  <ul :class="parent">-->
<!--    <li :class="child">Apple</li>-->
<!--    <li :class="child">Banana</li>-->
<!--    <li :class="child">Coconut</li>-->
<!--    <li :class="child">Durian</li>-->
<!--  </ul>-->
<!--  <div :class="fruits">사과 / 바나나</div>-->
<!--  <div :class="fruitsArr">바나나 / 코코넛</div>-->
<!--  <div :title="fruitsArr">코코넛 / 두리안</div>-->
  <div :style="rect">
  <div :class="visible">사과</div>
  <div :class="hidden">과자</div>
  <div :class="{ fruits: true }">바나나</div>
  </div>
</template>