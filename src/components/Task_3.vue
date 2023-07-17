<script setup>
import button_back from "./ui-components/button_back.vue";
import album_el from "./ui-components/album_elem.vue";

const album = [
  { url: "src/assets/image/foto/beach.jpg", type: "beach" },
  { url: "src/assets/image/foto/deer.jpg", type: "deer" },
  { url: "src/assets/image/foto/lake.jpg", type: "lake" },
  { url: "src/assets/image/foto/coffee.jpg", type: "coffee" },
  { url: "src/assets/image/foto/landscape.jpg", type: "landscape" },
  { url: "src/assets/image/foto/lego.jpg", type: "lego" },
  { url: "src/assets/image/foto/pigeon.jpg", type: "pigeon" },
  { url: "src/assets/image/foto/skydiver.jpg", type: "skydiver" },
  { url: "src/assets/image/foto/sportsGirl.jpg", type: "sportsGirl" },
  { url: "src/assets/image/foto/squirrel.jpg", type: "squirrel" },
  { url: "src/assets/image/foto/workplace.jpg", type: "workplace" },
];
</script>

<template>
  <h1 class="name_caption">Наслоение</h1>
  <div class="workspace workspace--task3">
    <button_back />
    <album_el
      class="photo"
      v-for="(elem, i) in album"
      :key="'elem' + i"
      :class="elem.type"
      :src="elem.url" />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.name_caption {
  display: block;
}
.workspace--task3 {
  @include flex(center, center);
  @include size(50vw, 50vh);
  // background-size: 50%;
  // margin: 25% auto;

  .photo {
    // background-size: auto;
    @include size(50vw, 50vh);
    margin: 25% auto;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
  }
}
.beach {
  // @include layers(10, auto, auto, -35deg, 1.3);
  z-index: 10;
  rotate: -35deg;
  width: 50%;
}

// .beach {
//   @include layers(10, auto, auto, -35deg, 1.3);
// }

// .squirrel {
//   @include layers(6, auto, 0.1%, 30deg, 1.3);
//   width: 40%;
// }

// .deer {
//   @include layers(
//     url("../assets/image/foto/deer.jpg"),
//     8,
//     0.1%,
//     auto,
//     -19deg,
//     1.3
//   );
// }

// .lake {
//   @include layers(
//     url("src/assets/image/foto/lake.jpg"),
//     7,
//     auto,
//     auto,
//     -7deg,
//     1.3
//   );
// }

// .workplace {
//   @include layers(
//     url("src/assets/image/foto/workplace.jpg"),
//     9,
//     auto,
//     0.1em,
//     15deg,
//     1.3
//   );
// }

// .sportsGirl {
//   @include layers(
//     url("src/assets/image/foto/sportsGirl.jpg"),
//     5,
//     0.5em,
//     1,
//     -5deg,
//     1
//   );
// }
// .skydiver {
//   @include layers(
//     url("src/assets/image/foto/skydiver.jpg"),
//     4,
//     1,
//     1,
//     7deg,
//     1.2
//   );
// }
// .pigeon {
//   @include layers(
//     url("src/assets/image/foto/pigeon.jpg"),
//     3,
//     auto,
//     0.5,
//     20deg,
//     1
//   );
// }
// .lego {
//   @include layers(
//     url("src/assets/image/foto/lego.jpg"),
//     2,
//     0.5em,
//     auto,
//     -20deg,
//     auto
//   );
// }
// .landscape {
//   @include layers(
//     url("src/assets/image/foto/landscape.jpg"),
//     11,
//     auto,
//     auto,
//     10deg,
//     1.5
//   );
//   // animation: 40s linear infinite rot;
// }

// // @keyframes rot {
// //   0% {
// //     transform: rotate(0deg);
// //   }
// //   100% {
// //     transform: rotate(360deg);
// //   }
// // }

// // .landscape:hover {
// //   animation-play-state: paused;
// //   cursor: grabbing;
// // }

// .coffee {
//   @include layers(url("src/assets/image/foto/coffee.jpg"), 1, auto, auto, 0, 1);
// }
</style>
