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
  // { url: "src/assets/image/5.jpg", type: "panorama" },
];
</script>

<template>
  <h1 class="name_caption">Коллаж nature через props</h1>
  <button_back />
  <div class="workspace workspace--task2">
    <gallery_el
      class="picture"
      v-for="(elem, i) in gallery"
      :key="'elem' + i"
      :class="elem.type"
      :src="elem.url" />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.workspace--task2 {
  @include size(80%, fit-content);
  margin: 10% auto;
  display: grid;
  grid-gap: 0.5em;
  // border: 2px solid rgb(17, 0, 255);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  // grid-template-columns: repeat(auto-fill, 400px); //автозаполнение

  // grid-template-columns: repeat(
  //   auto-fill,
  //   minmax(31.25rem, 3fr)
  // ); //автозаполнение
  grid-auto-rows: auto;
  // grid-template-rows: 1fr 2fr 1fr 2fr;
  // grid-template-rows: repeat(2, 1fr 2fr);

  .picture {
    // border: 2px solid red;
  }
}

// .cube {
//   // grid-area: square;
//   @include size(31.25rem);
//   grid-column: 1;
//   grid-row: 1;
// }

.horizontal_rectangle {
  // grid-area: hor;
  @include size(63.3rem, 31.25rem);
  grid-row: 2;
  grid-column: 1 / span 2;
}

.vertical_rectangle {
  // grid-area: vert;
  @include size(31.25rem, 63.3rem);
  grid-column: 3;
  grid-row: 1 / span 2;
}

// .panorama {
//   grid-area: pan;
//   // @include size(57.6em, 20em);
// }
</style>
