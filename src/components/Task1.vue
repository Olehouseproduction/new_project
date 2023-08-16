<script setup>
import Header from "./ui-components/Header.vue";
import Mobile from "./task-components/Subtask1Mobile.vue";
import Tablet from "./task-components/Subtask1Tablet.vue";
import Desktop from "./task-components/Subtask1Desktop.vue";
import GalleryElem from "./task-components/Subtask1Gallery.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import item from "./task-components/sub-task-1-5-gallery-Item.vue";

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
  { url: "src/assets/image/sea1.png", type: "horizontal_rectangle" },
  { url: "src/assets/image/Tree.jpg", type: "cube" },
  { url: "src/assets/image/moon.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/fields.jpg", type: "cube" },
  { url: "src/assets/image/dora.png", type: "horizontal_rectangle" },
  { url: "src/assets/image/eric.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/lucas.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/railway.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/young.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/unsplash.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/tarry.png", type: "cube" },
  { url: "src/assets/image/unreal.jpg", type: "cube" },
];
</script>

<template>
  <div class="inner">
    <Header name="Позиционирование" />
    <div class="workspace--1">
      <Mobile />
      <Tablet />
      <Desktop />
    </div>
    <div class="workspace--2">
      <GalleryElem
        class="picture"
        v-for="(elem, i) in gallery"
        :key="'elem' + i"
        :class="elem.type"
        :src="elem.url" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.workspace--1 {
  @include size(100%, 60vh);
  @include flex(space-evenly, center, row);
  text-transform: uppercase;
}

.workspace--2 {
  width: 80%;
  margin: 5% auto;
  display: grid;
  grid-gap: 0.5em;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
}

.cube {
  // @include size(31.25rem);
  aspect-ratio: 1 / 1;
}

.horizontal_rectangle {
  // @include size(63.3rem, 31.25rem);
  aspect-ratio: 2 / 1;
  grid-column-end: span 2;
}

.vertical_rectangle {
  // @include size(31.25rem, 63.3rem);
  grid-row-end: span 2;
  aspect-ratio: 1 / 2;
}
</style>
