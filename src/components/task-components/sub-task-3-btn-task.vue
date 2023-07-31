<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="btn-task">
    <span>
      {{ props.name }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "./../../styles/mixin.scss";

.btn-task {
  @include size(10em, 9em);
  padding: 6px;
  @include flex(center, center);
  border-radius: 1.5em;
  margin-left: 1.5em;
  background-color: #f1f8fb;
  transform: scale(1);
  transition: all 350ms ease-in;
  box-shadow: 8px 10px 5px 2px #7a7911;
  cursor: pointer;
  span {
    text-align: center;
  }

  &:hover {
    animation: pulse 1.7s infinite;
  }
}
.pink {
  background-color: #ef71e2;
}

.green {
  background-color: #0cec61;
  transition: all 0.5s linear;
}
.yellow {
  background-color: #ffd02f;
}
.blue {
  background-color: #47aeff;
  transition: all 0.5s linear;
}
.red {
  background-color: #fc2335;
  transition: all 0.5s linear;
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
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.btn-task:first-child {
  @include position(absolute, $right: 8%, $top: 20%);
  background-color: #ffffff;
  @include size(9em, 5em);
}

main {
  transition: all 350ms linear;
}
</style>
