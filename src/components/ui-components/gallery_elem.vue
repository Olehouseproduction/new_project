<script setup>
const props = defineProps({
  class: String,
  src: String,
});
</script>

<template>
  <img class="photo_nature" :class="props.class" :src="props.src" alt="" />
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";

.photo_nature {
  @include size(100%);
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>
