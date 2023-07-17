<script setup>
import button_back from "./ui-components/button_back.vue";
import mobile from "./task-components/mobile_layout.vue";
import tablet from "./task-components/tablet_layout.vue";
import desktop from "./task-components/desktop_layout.vue";
</script>

<template>
  <div class="main">
    <h1 class="name_caption">Позиционирование</h1>
    <div class="workspace workspace--task1">
      <button_back />
      <section class="color_blocks">
        <mobile />
        <tablet />
        <desktop />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.color_blocks {
  display: flex;
  justify-content: space-evenly;
  margin-top: 3%;
  text-transform: uppercase;
}
</style>
