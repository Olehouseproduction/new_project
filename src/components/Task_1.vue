<script setup>
import button_back from "./ui-components/button_back.vue";
import mobile from "./task-components/mobile_layout.vue";
import tablet from "./task-components/tablet_layout.vue";
import desktop from "./task-components/desktop_layout.vue";
</script>

<template>
  <div class="main">
    <button_back />
    <h1 class="name_caption">Позиционирование</h1>
    <div class="workspace workspace--task1">
      <mobile />
      <tablet />
      <desktop />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.workspace--task1 {
  @include size(100%, 100%);
  @include flex(space-evenly, center, row);
  text-transform: uppercase;
}
</style>
