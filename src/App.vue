<script setup>
import {reactive} from "vue";

const state = reactive({
  mvpId: 7,
  players: [
    { id: 7, name: 'John' },
    { id: 9, name: 'Jane' },
    { id: 10, name: 'Bob' },
  ]
});

const getMvpName = () => {
  if (state.mvpId) {
    const player = state.players.find(p => p.id === state.mvpId);
    if (player) {
      return player.name;
    }
  }

  return 'NO MVP';
}
</script>

<template>
  <div>
    <h1>MVP</h1>
    <div>{{ getMvpName() }}</div>
<!--    <div>-->
<!--      <template v-if="state.mvpId">-->
<!--        {{ state.players.find(m => m.id === state.mvpId)?.name || 'NO MVP' }}-->
<!--      </template>-->
<!--      <template v-else>NO MVP</template>-->
<!--    </div>-->
  </div>
</template>