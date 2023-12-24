<template>
  <div class="app">
    <GameTable />
  </div>
</template>

<script setup lang="ts">
import GameTable from "./components/GameTable.vue";
</script>

<style scoped>
.app {
  background-color: #212444;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  position: relative;
}
</style>

<style>
body,
html {
  height: 100%;
  width: 100%;
}

#app {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
