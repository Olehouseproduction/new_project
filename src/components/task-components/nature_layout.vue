<script setup>
import gallery_elem from "../ui-components/gallery_elem.vue";

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
  <div class="container-nature">
    <gallery_elem
      v-for="(item, i) in gallery"
      :key="'item' + i"
      :class="item.type"
      :src="item.url" />
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";

.container-nature {
  margin: 5%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1em;
  height: 48em;
  justify-content: center;

  // .nature {
  //   background-size: contain;
  //   background-repeat: no-repeat;
  //   object-fit: contain;
  //
  // }
  // }

  // .plant {
  //   background-image: url("../../assets/image/1.jpg");
  //   background-position: center;
  //   grid-column: 5;
  //   grid-row: 1/3;
  // }

  // .dog {
  //   background-image: url("../../assets/image/2.jpg");
  //   grid-column: 1;
  //   grid-row: 1/3;
  //   background-position: bottom;
  // }

  // .bike {
  //   background-image: url("../../assets/image/3.jpg");
  //   grid-column: 4;
  //   grid-row: 1;
  //   background-position: bottom;
  // }

  // .chamomile {
  //   background-image: url("../../assets/image/4.jpg");
  //   grid-column: 2;
  //   background-position: center;
  // }

  // .mountains {
  //   background-image: url("../../assets/image/5.jpg");
  //   grid-column: 3/5;
  //   background-position: center;
  //   grid-row: 2;
  // }

  // .grass {
  //   background-image: url("../../assets/image/6.jpg");
  //   grid-column: 3;
  //   grid-row: 1;
  //   background-position: center;
  // }

  // .sheet {
  //   background-image: url("../../assets/image/7.jpg");
  //   grid-column: 4;
  //   grid-row: 3;
  // }

  // .stones {
  //   background-image: url("../../assets/image/8.jpg");
  //   grid-column: 2;
  //   grid-row: 2/4;
  //   background-position: top;
  // }

  // .dachshund {
  //   background-image: url("../../assets/image/9.jpg");
  //   grid-column: 3;
  //   grid-row: 3;
  //   background-position: center;
}
</style>
