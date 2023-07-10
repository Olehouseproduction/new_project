<script setup>
const props = defineProps({
  class: String,
  url: String,
});
</script>

<template>
  <div :class="props.class">
    <img :src="props.url" alt="" />
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
