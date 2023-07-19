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
  cursor: pointer;
  span {
    text-align: center;
  }

  &:hover {
    animation: pulse 1.7s infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    background-color: #f1f8fb;
  }
  50% {
    transform: scale(1.2);
    background-color: #ffd02f;
  }
  100% {
    transform: scale(1);
    background-color: #f1f8fb;
  }
}

.btn-refresh {
  @include position(absolute, $right: 8%, $top: 20%);
  background-color: #ffffff;
  @include size(9em, 5em);
}
</style>
