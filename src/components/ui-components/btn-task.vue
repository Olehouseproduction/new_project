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
  // продумывать редактирование текста и в всего остального
  padding: 12px;
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
    background-color: #ffe42c;
  }
  100% {
    transform: scale(1);
    background-color: #f1f8fb;
  }
}

.btn-task:first-child {
  position: absolute;
  top: 18%;
  right: 8%;
  background-color: #ffffff;

  @include size(9em, 5em);
}
</style>
