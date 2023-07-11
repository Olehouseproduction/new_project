<script setup>
import button_back from "./ui-components/button_back.vue";
import album_el from "./ui-components/album_elem.vue";

const album = [
  { url: "src/assets/image/foto/beach.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/deer.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/lake.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/foto/coffee.jpg", type: "vertical_rectangle" },
  {
    url: "src/assets/image/foto/landscape.jpg",
    type: "horizontal_rectangle",
  },
  { url: "src/assets/image/foto/lego.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/pigeon.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/skydiver.jpg", type: "horizontal_rectangle" },
  {
    url: "src/assets/image/foto/sportsGirl.jpg",
    type: "horizontal_rectangle",
  },
  { url: "src/assets/image/foto/squirrel.jpg", type: "horizontal_rectangle" },
  {
    url: "src/assets/image/foto/workplace.jpg",
    type: "horizontal_rectangle",
  },
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
      <div class="beach horizontal_rectangle"></div>
      <div class="squirrel horizontal_rectangle"></div>
      <div class="deer horizontal_rectangle"></div>
      <div class="lake vertical_rectangle"></div>
      <div class="workplace horizontal_rectangle"></div>
      <div class="sportsGirl horizontal_rectangle"></div>
      <div class="skydiver horizontal_rectangle"></div>
      <div class="pigeon horizontal_rectangle"></div>
      <div class="lego horizontal_rectangle"></div>
      <div class="landscape horizontal_rectangle"></div>
      <div class="coffee vertical_rectangle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.work-space--3 {
  // @include size(100vw, 100vh);
  // @include flex(center, center);
  // margin: 0 auto;
}

.container {
  margin: 20% auto;
  gap: 1em;
  width: 100vw;
  @include flex(center, center);

  div {
    margin: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: contain;
    position: absolute;
  }
}

.beach {
  background-image: url("src/assets/image/foto/beach.jpg");
  transform: rotate(-36deg);
  z-index: 10;
  scale: 1.3;
  rotate: 35deg;
}

.squirrel {
  background-image: url("../assets/image/foto/squirrel.jpg");
  transform: rotate(-30deg);
  z-index: 6;
  scale: 1.3;
  rotate: 30deg;
  left: 0.1%;
}

.deer {
  background-image: url("../assets/image/foto/deer.jpg");
  z-index: 8;
  scale: 1.3;
  rotate: -19deg;
  right: 0.1%;
}

.lake {
  background-image: url("src/assets/image/foto/lake.jpg");
  z-index: 7;
  scale: 1.3;
  rotate: -7deg;
}

.workplace {
  background-image: url("src/assets/image/foto/workplace.jpg");
  z-index: 9;
  left: 0.1em;
  rotate: 15deg;
  scale: 1.3;
}

.sportsGirl {
  background-image: url("src/assets/image/foto/sportsGirl.jpg");
  z-index: 5;
  right: 0.5em;
  rotate: -5deg;
}
.skydiver {
  background-image: url("src/assets/image/foto/skydiver.jpg");
  z-index: 4;
  rotate: 7deg;
  scale: 1.2;
}
.pigeon {
  background-image: url("src/assets/image/foto/pigeon.jpg");
  z-index: 3;
  left: 0.5em;
  rotate: 20deg;
}
.lego {
  background-image: url("src/assets/image/foto/lego.jpg");
  z-index: 2;
  right: 0.5em;
  rotate: -20deg;
}
// .landscape {
//   background-image: url("src/assets/image/foto/landscape.jpg");
//   z-index: 10;
// }
.coffee {
  background-image: url("src/assets/image/foto/coffee.jpg");
  z-index: 1;
}

.horizontal_rectangle {
  @include size(28.5em, 18.7em);
}

.vertical_rectangle {
  @include size(36em, 30em);
}
</style>
