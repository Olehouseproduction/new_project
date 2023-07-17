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
</style>
