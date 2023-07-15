<script setup>
const props = defineProps({
  class: String,
  src: String,
});
</script>

<template>
  <div :class="props.class">
    <img :src="props.src" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";

.horizontal_rectangle {
  @include size(28.5em, 18.7em);
  object-fit: contain;
}

.vertical_rectangle {
  @include size(36em, 54em);
  object-fit: contain;
}
</style>
