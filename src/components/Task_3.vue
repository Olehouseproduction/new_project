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
  <button_back />
  <div class="workspace workspace--task3">
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

.workspace--task3 {
  @include flex(center, center);
  margin: 22% auto;

  .photo {
    @include size(28.5em, 18.7em);
    position: absolute;
  }
}
.beach {
  @include layers(10, auto, auto, -35deg, 1.3);
}

.squirrel {
  @include layers(6, auto, 35%, -61deg, 1.5);
}

.deer {
  @include layers(8, auto, auto, -19deg, 1.4);
}

.lake {
  @include layers(7, auto, 38%, 41deg, 1.5);
}

.workplace {
  @include layers(9, auto, auto, 15deg, 1.4);
}

.sportsGirl {
  @include layers(5, auto, auto, -5deg, 1.3);
}

.skydiver {
  @include layers(4, auto, auto, 5deg, 1.5);
}
.pigeon {
  @include layers(3, auto, auto, 15deg, 1.3);
}

.lego {
  @include layers(2, auto, auto, -35deg, 1.5);
}

.coffee {
  @include layers(1, auto, auto, 0, 1.1);
}

.landscape {
  @include layers(11, auto, auto, 10deg, 1.5);
  @include size(50px);
  // animation: 40s linear infinite rot;
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.landscape:hover {
  animation-play-state: paused;
  cursor: grabbing;
}
</style>
