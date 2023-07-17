<script setup>
import button_back from "./ui-components/button_back.vue";
import gallery_el from "./ui-components/gallery_elem.vue";

const gallery = [
  { url: "src/assets/image/4.jpg", type: "cube" },
  { url: "src/assets/image/9.jpg", type: "cube" },
  { url: "src/assets/image/6.jpg", type: "cube" },
  { url: "src/assets/image/7.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/3.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/8.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/1.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/2.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/5.jpg", type: "panorama" },
];
</script>

<template>
  <div class="main">
    <h1 class="name_caption">Коллаж nature через props</h1>

    <button_back />

    <div class="workspace workspace--task2">
      <gallery_el
        v-for="(elem, i) in gallery"
        :key="'elem' + i"
        :class="elem.type"
        :src="elem.url" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
</style>
