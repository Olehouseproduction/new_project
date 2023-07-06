<script setup>
import button_back from "./ui-components/button_back.vue";
import mobile from "./ui-components/mobile_layout.vue";
import tablet from "./ui-components/tablet_layout.vue";
import desktop from "./ui-components/desktop_layout.vue";
import nature from "./ui-components/nature_layout.vue";
</script>

<template>
  <div class="main">
    <h1 class="name_task">Позиционирование</h1>
    <div class="work-space--task1">
      <button_back />
      <button class="btn_transform">Нажми</button>
      <section class="color_blocks">
        <mobile />
        <tablet />
        <desktop />
      </section>
      <section class="naturе">
        <nature />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.main {
  margin: 0 auto;
  box-sizing: border-box;

  .work-space--task1 {
    @include size(100vw, 100vh);
    overflow-y: scroll;
  }

  .color_blocks {
    display: flex;
    justify-content: space-evenly;
    margin-top: 9vh;
    text-transform: uppercase;
  }

  .btn_transform {
    display: flex;
    align-items: center;
    margin: 10px;
    cursor: pointer;
  }

  // .nature {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   width: 50%;
  // }
}
</style>
