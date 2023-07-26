<script setup>
const props = defineProps({
  name: String,
  index: Number,
});
</script>

<template>
  <div class="btn-task">
    <span>
      {{ props.index }}
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
  cursor: pointer;
  span {
    text-align: center;
  }

  &:hover {
    animation: pulse 1.7s infinite;
  }
}

.blue {
  background-color: #47aeff;
  transition: 0.5s linear;
}

.green {
  background-color: #0cec61;
  transition: 0.5s linear;
}

.red {
  background-color: #fc2335;
  transition: 0.5s linear;
}

.pink {
  background-color: #ef71e2;
}

.yellow {
  background-color: #ffd02f;
}

.invisible {
  opacity: 0;
  pointer-events: none;
}

.pulse {
  animation: pulse 1.3s ease-in-out infinite;
}

// .refresh {
//   position: absolute;
//   top: 5%;
//   right: 5%;
// }

@keyframes pulse {
  0% {
    transform: scale(1);
    // background-color: #f1f8fb;
  }
  50% {
    transform: scale(1.2);
    // background-color: #b1ecd5;
  }
  100% {
    transform: scale(1);
    // background-color: #f1f8fb;
  }
}

.btn-task:first-child {
  @include position(absolute, $right: 8%, $top: 20%);
  background-color: #ffffff;
  @include size(9em, 5em);
}

// body.active {
//   background-color: purple;
//   transition: 350ms linear;
// }
</style>
