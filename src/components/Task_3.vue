<script setup>
import button_back from "./ui-components/button_back.vue";
import album_el from "./ui-components/album_elem.vue";

const album = [
  { url: "src/assets/image/foto/beach.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/deer.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/lake.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/foto/coffee.jpg", type: "vertical_rectangle" },
  { url: "src/assets/image/foto/landscape.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/lego.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/pigeon.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/skydiver.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/sportsGirl.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/squirrel.jpg", type: "horizontal_rectangle" },
  { url: "src/assets/image/foto/workplace.jpg", type: "horizontal_rectangle" },
];
</script>

<template>
  <div class="workspace workspace--task3">
    <!-- <h1 class="name_caption">Смена классов</h1> -->
    <h1 class="name_caption">Наслоение (временно)</h1>
    <button_back />
    <album_el
      v-for="(elem, i) in gallery"
      :key="'elem' + i"
      :class="elem.type"
      :src="elem.url" />

    <div class="container-photo">
      <div class="photo beach horizontal_rectangle"></div>
      <div class="photo squirrel horizontal_rectangle"></div>
      <div class="photo deer horizontal_rectangle"></div>
      <div class="photo lake vertical_rectangle"></div>
      <div class="photo workplace horizontal_rectangle"></div>
      <div class="photo sportsGirl horizontal_rectangle"></div>
      <div class="photo skydiver horizontal_rectangle"></div>
      <div class="photo pigeon horizontal_rectangle"></div>
      <div class="photo lego horizontal_rectangle"></div>
      <div class="photo landscape horizontal_rectangle"></div>
      <div class="photo coffee vertical_rectangle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.container-photo {
  @include flex(center, center);
  @include size(100vw, fit-content);
  margin: 23% auto;

  .photo {
    margin: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
  }
}

.beach {
  @include layers(
    url("src/assets/image/foto/beach.jpg"),
    10,
    auto,
    auto,
    -35deg,
    1.3
  );
}

.squirrel {
  @include layers(
    url("../assets/image/foto/squirrel.jpg"),
    6,
    auto,
    0.1%,
    30deg,
    1.3
  );
}

.deer {
  @include layers(
    url("../assets/image/foto/deer.jpg"),
    8,
    0.1%,
    auto,
    -19deg,
    1.3
  );
}

.lake {
  @include layers(
    url("src/assets/image/foto/lake.jpg"),
    7,
    auto,
    auto,
    -7deg,
    1.3
  );
}

.workplace {
  @include layers(
    url("src/assets/image/foto/workplace.jpg"),
    9,
    auto,
    0.1em,
    15deg,
    1.3
  );
}

.sportsGirl {
  @include layers(
    url("src/assets/image/foto/sportsGirl.jpg"),
    5,
    0.5em,
    1,
    -5deg,
    1
  );
}
.skydiver {
  @include layers(
    url("src/assets/image/foto/skydiver.jpg"),
    4,
    1,
    1,
    7deg,
    1.2
  );
}
.pigeon {
  @include layers(
    url("src/assets/image/foto/pigeon.jpg"),
    3,
    auto,
    0.5,
    20deg,
    1
  );
}
.lego {
  @include layers(
    url("src/assets/image/foto/lego.jpg"),
    2,
    0.5em,
    auto,
    -20deg,
    auto
  );
}
.landscape {
  @include layers(
    url("src/assets/image/foto/landscape.jpg"),
    11,
    auto,
    auto,
    10deg,
    1.5
  );
  // animation: 40s linear infinite rot;
}

// @keyframes rot {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }

// .landscape:hover {
//   animation-play-state: paused;
//   cursor: grabbing;
// }

.coffee {
  @include layers(url("src/assets/image/foto/coffee.jpg"), 1, auto, auto, 0, 1);
}

.horizontal_rectangle {
  @include size(28.5em, 18.7em);
}

.vertical_rectangle {
  @include size(36em, 30em);
}
</style>
