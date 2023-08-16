<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  name: String,
  isBlue: Boolean,
  isRed: Boolean,
  isPulse: Boolean,
  isPink: Boolean,
  isYellow: Boolean,
  isGreen: Boolean,
  isInvisible: Boolean,
});

const emits = defineEmits();

function handleButtonClick() {
  emits("click");
}
</script>

<template>
  <button
    class="BtnTask"
    :class="{
      blue: props.isBlue,
      red: props.isRed,
      pulse: props.isPulse,
      pink: props.isPink,
      yellow: props.isYellow,
      green: props.isGreen,
      invisible: props.isInvisible,
    }"
    @click="handleButtonClick">
    {{ props.name }}
  </button>
</template>

<style lang="scss" scoped>
@import "./../../styles/mixin.scss";

.BtnTask {
  @include size(10em, 9em);
  padding: 6px;
  @include flex(center, center);
  border-radius: 1.5em;
  font: inherit;
  border: none;
  background-color: #f1f8fb;
  transition: background-color 350ms ease-in;
  scale: 1;
  box-shadow: 8px 10px 5px 2px #7a7911;
  cursor: pointer;
  text-align: center;
  &:hover {
    animation: pulse 1.7s infinite;
  }
}
.pink {
  background-color: #ef71e2;
}

.green {
  background-color: #0cec61;
}
.yellow {
  background-color: #ffd02f;
}

.green {
  background-color: #0cec61;
}
.blue {
  background-color: #47aeff;
}

.red {
  background-color: #fc2335;
}

.invisible {
  opacity: 0;
  pointer-events: none;
}

.pulse {
  animation: pulse 1.3s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.2;
  }
  100% {
    scale: 1;
  }
}
</style>
