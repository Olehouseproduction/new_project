<script setup>
const props = defineProps({
  class: String,
  src: String,
});
</script>

<template>
  <div :class="props.class">
    <img class="inner_img" :src="props.src" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";

.inner_img {
  @include size(100%);
  object-fit: cover;
}
</style>
