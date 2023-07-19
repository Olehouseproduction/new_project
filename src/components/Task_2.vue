<script setup>
import button_back from "./ui-components/button_back.vue";
import gallery_el from "./ui-components/gallery_elem.vue";

const gallery = [
  { url: "src/assets/image/8.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/sakura.jpg", type: "cube" },
  { url: "src/assets/image/3.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/2.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/seagulls.jpg", type: "cube" },
  { url: "src/assets/image/daisy.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/Flowers.jpg", type: "cube" },
  { url: "src/assets/image/Greece.png", type: "cube" },
  { url: "src/assets/image/Lotos.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/Sea.jpg", type: "cube" },
  { url: "src/assets/image/Sunset.jpg", type: "cube" },
  { url: "src/assets/image/Tree.jpg", type: "cube" },
  { url: "src/assets/image/fields.jpg", type: "cube" },
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
  // @include size(70%, fit-content);
  width: 70%;
  margin: 5% auto;
  display: grid;
  grid-gap: 0.5em;
  // row-gap: 0.5em;

  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);

  // grid-template-rows: 1fr 1fr;
  // grid-template-rows: repeat(2, auto);
  // grid-template-columns: repeat(auto-fill, 400px); //автозаполнение
  // grid-template-rows: repeat(auto-fill);
  // grid-auto-rows: auto;
  // border: 2px solid rgb(17, 0, 255);

  .picture {
    // border: solid 1px red;
    background-color: aqua;
  }
}

.cube {
  // @include size(31.25rem);
  // grid-column: 1, 2;
  // // grid-column: nth-child(2n+1);
  // grid-row: 1, 3;
  aspect-ratio: 1 / 1;
}

.horizontal_rectangle {
  // @include size(63.3rem, 31.25rem);
  aspect-ratio: 2 / 1;
  grid-column-end: span 2;
  // grid-column: 1 / span 2;
  // grid-row: 2;
}

.vertical_rectangle {
  // @include size(31.25rem, 63.3rem);
  // grid-column: 3;
  grid-row-end: span 2;
  // aspect-ratio: 1 / 2;
}

// .panorama {
//   // @include size(57.6em, 20em);
// }
</style>
