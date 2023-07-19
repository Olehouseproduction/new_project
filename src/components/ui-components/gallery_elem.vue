<script setup>
const props = defineProps({
  class: String,
  src: String,
});
</script>

<template>
  <div :class="props.class">
    <img class="photo_nature" :src="props.src" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";

.photo_nature {
  @include size(100%);
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>
