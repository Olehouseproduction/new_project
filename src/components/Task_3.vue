<script setup>
import button_back from "./ui-components/button_back.vue";
import album_el from "./ui-components/album_elem.vue";

const album = [
  { url: "../../assets/image/foto/beach.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/foto/coffee.jpg", type: "vertical_rectangle" },
  { url: "../../assets/image/foto/deer.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/foto/lake.jpg", type: "vertical_rectangle" },
  { url: "../../assets/image/foto/landscape.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/foto/lego.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/foto/pigeon.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/foto/skydiver.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/foto/sportsGirl.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/foto/squirrel.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/foto/workplace.jpg", type: "horizontal_rectangle" },
];
</script>

<template>
  <div class=".work-space--3">
    <!-- <h1 class="name_task">Смена классов</h1> -->
    <h1 class="name_task">Наслоение (временно)</h1>
 
    <button_back />
    <album_el 
      v-for="(elem, i) in gallery"
      :key="'elem' + i"
      :class="elem.type"
      :src="elem.url" />

    <div class="container">
      <div class="beach">
      </div>
      <div class="cofee">
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

@import "../styles/mixin.scss";


.work-space--3 {
    @include size(100vw, 100vh);
    @include flex(center, center);
    overflow-y: scroll;
  }

.beach{
  background-image: url ("../../assets/image/foto/beach.jpg");
  @include size (80em, 53em)
}
.cofee{
  background-image: url ("../../assets/image/foto/coffee.jpg");
  @include size (80em, 90em)
}
// .horizontal_rectangle {
//   @include size(28.5em, 18.7em);
//   object-fit: contain;
// }

// .vertical_rectangle {
//   @include size(36em, 54em);
//   object-fit: contain;
// }
</style>
