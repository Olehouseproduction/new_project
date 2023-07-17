<script setup>
const props = defineProps({
  class: String,
  src: String,
});
</script>

<template>
  <div :class="props.class">
    <img class="photo" :src="props.src" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";

.cube {
  @include size(25em);
}

.horizontal_rectangle {
  @include size(28.5em, 18.7em);
}

.vertical_rectangle {
  @include size(36em, 54em);
}

.panorama {
  @include size(57.6em, 20em);
  object-fit: contain;
}
.photo {
  @include size(100%);
  object-fit: cover;
}
</style>
