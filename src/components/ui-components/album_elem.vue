<script setup>
const props = defineProps({
  class: String,
  src: String,
});
</script>

<template>
  <div :class="props.class">
    <img class="sades" :src="props.src" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";


.sades{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
