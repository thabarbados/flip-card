<template>
  <div class="gameTable">
    <div class="gameTable__content">
      <PlayingCard
        v-for="item in cards"
        :suit="item.suit"
        :level="item.level"
        :color="item.color"
        :status="item.status"
      />
    </div>

    <button class="gameTable__button" @click="flipCard">
      Flip middle card
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import PlayingCard from "./PlayingCard.vue";

import { ICardData } from "../types";

const cards = ref<ICardData[]>([
  {
    suit: "club",
    level: "10",
    color: "#000000",
    status: "closed",
  },
  {
    suit: "diamond",
    level: "A",
    color: "#b42f03",
    status: "closed",
  },
  {
    suit: "heart",
    level: "7",
    color: "#b42f03",
    status: "closed",
  },
]);

const flipCard = () => {
  if (cards.value[1].status === "opened") {
    cards.value[1].status = "closed";

    return;
  }

  cards.value[1].status = "opened";
};
</script>

<style scoped>
.gameTable {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  padding: 16px;
  box-sizing: border-box;
  background-color: #212444;
}

.gameTable__content {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
}

.gameTable__button {
  background-color: #71c658;
  color: #fff;
  padding: 4px 16px;
  border-radius: 8px;
  text-transform: uppercase;
}
</style>
