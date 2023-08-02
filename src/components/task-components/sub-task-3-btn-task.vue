<script setup>
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
</script>

<template>
  <div
    class="btn-task"
    :class="{
      blue: props.isBlue,
      red: props.isRed,
      pulse: props.isPulse,
      pink: props.isPink,
      yellow: props.isYellow,
      green: props.isGreen,
      invisible: props.isInvisible,
    }">
    {{ props.name }}
  </div>
</template>

<style lang="scss" scoped>
@import "./../../styles/mixin.scss";

.btn-task {
  @include size(10em, 9em);
  padding: 6px;
  @include flex(center, center);
  border-radius: 1.5em;
  margin-left: 1.5em; //Решить с помощью флексов
  background-color: #f1f8fb;
  transition: background-color 350ms ease-in;
  scale: 1;
  box-shadow: 8px 10px 5px 2px #7a7911;
  cursor: pointer; // сделать кнопки
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
.blue {
  background-color: #47aeff;
}

.green {
  background-color: #0cec61;
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
