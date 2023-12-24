<template>
  <div
    class="playingCard"
    :class="{
      playingCard__flipped: isFlipped,
    }"
  >
    <div class="playingCard__content playingCard__closed"></div>

    <div class="playingCard__content playingCard__opened">
      <div class="playingCard__level playingCard__level_top">{{ level }}</div>

      <div class="playingCard__icon">
        <component :is="cardSuitIcon" />
      </div>

      <div class="playingCard__level playingCard__level_bottom">
        {{ level }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";

import SpadeSvg from "../assets/spade.svg";
import ClubSvg from "../assets/club.svg";
import DiamondSvg from "../assets/diamond.svg";
import HeartSvg from "../assets/heart.svg";

import { CardSuit, CardLevel, CardColor, CardStatus } from "../types";

const props = defineProps({
  suit: {
    type: String as PropType<CardSuit>,
    default: "spade",
  },
  level: {
    type: String as PropType<CardLevel>,
    default: "A",
  },
  color: {
    type: String as PropType<CardColor>,
    default: "#000000",
  },
  status: {
    type: String as PropType<CardStatus>,
    default: "opened",
  },
});

const cardSuitIcon = computed(() => {
  if (props.suit === "club") {
    return ClubSvg;
  }

  if (props.suit === "diamond") {
    return DiamondSvg;
  }

  if (props.suit === "heart") {
    return HeartSvg;
  }

  return SpadeSvg;
});

const isFlipped = computed(() => props.status === "opened");
</script>

<style scoped>
.playingCard {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 90px;
  height: 136px;
  border-radius: 20px;
  background: #fff;
  transform-style: preserve-3d;
  transition: transform 1s;

  @media only screen and (min-width: 599px) {
    width: 180px;
    height: 270px;
  }
}

.playingCard__content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 8px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  backface-visibility: hidden;
  color: v-bind("props.color");
}

.playingCard__closed {
  border-radius: 18px;
  background: #9b2d30;
}
.playingCard__opened {
  border-radius: 20px;
  background: #fff;
  transform: rotateY(180deg);
}

.playingCard__flipped {
  transform: rotateY(180deg) translateY(-200px);

  @media only screen and (min-width: 599px) {
    transform: rotateY(180deg) translateY(-350px);
  }
}

.playingCard__level {
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
}

.playingCard__level_top {
  align-self: flex-end;
}

.playingCard__level_bottom {
  align-self: flex-start;
}

.playingCard__icon {
  width: 24px;
  height: 24px;
  align-self: center;
}
</style>
