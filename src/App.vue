<script setup>
import {computed, reactive} from "vue";

const state = reactive({
  mvpId: 7,
  players: [
    { id: 7, name: 'John' },
    { id: 9, name: 'Jane' },
    { id: 10, name: 'Bob' },
  ]
});

const computedMvpName = computed(() => {
  if (state.mvpId) {
    const player = state.players.find(p => p.id === state.mvpId);

    if (player) {
      return player.name;
    }
  }

  return 'NO MVP';
});

// .value 를 사용해야 script 블록에서 컴퓨티드 사용 가능
console.log(computedMvpName.value);
</script>

<template>
  <div>
    <h1>MVP</h1>
    <div>{{ computedMvpName }}</div>
  </div>
</template>