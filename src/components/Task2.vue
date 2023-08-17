<script setup>
import Header from "./ui-components/Header.vue";
import Album from "./task-components/SubTask2Album.vue";
import { reactive } from "vue";

const surprise = reactive({ id: -1 });

const album = [
  { url: "src/assets/image/foto/pigeon.jpg", type: "pigeon" },
  { url: "src/assets/image/foto/squirrel.jpg", type: "squirrel" },
  { url: "src/assets/image/foto/beach.jpg", type: "beach" },
  { url: "src/assets/image/foto/deer.jpg", type: "deer" },
  { url: "src/assets/image/foto/lake.jpg", type: "lake" },
  { url: "src/assets/image/foto/coffee.jpg", type: "coffee" },
  { url: "src/assets/image/foto/lego.jpg", type: "lego" },
  { url: "src/assets/image/foto/workplace.jpg", type: "workplace" },
  { url: "src/assets/image/foto/sportsGirl.jpg", type: "sportsGirl" },
  { url: "src/assets/image/foto/skydiver.jpg", type: "skydiver" },
  { url: "src/assets/image/foto/landscape.jpg", type: "landscape" },
];
</script>

<template>
  <div>
    <Header name="Наслоение" />
    <div class="workspace--task2">
      <Album
        class="photo"
        v-for="(elem, i) in album"
        @mouseover="surprise.id = i"
        @mouseout="surprise.id = -1"
        :key="'elem' + i"
        :class="[elem.type, surprise.id == i ? 'active' : '']"
        :src="elem.url" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.workspace--task2 {
  @include flex(center, center);
  margin: 16% auto;

  .photo {
    @include size(28.5em, 18.7em);
    position: absolute;
  }
}

.pigeon {
  // @include layers(3, auto, 50%, -6deg, 1);
  transform: rotate(30deg) translateY(-50px);
  bottom: 41vh;
  left: 24vw;
}
.squirrel {
  // @include layers(6, auto, 30%, -42deg, 1);
  // z-index: 20;
  // rotate: 10deg;
  // transform: rotate(45deg) translateX(180px);
  transform: rotate(30deg) translateY(-50px) translateX(-50px);
  transform-origin: 50% 50%;
  left: 35vw;
}

.beach {
  // @include layers(10, auto, auto, -35deg, 1);
  transform: rotate(30deg) translateY(-50px);
  left: 38vw;
  bottom: 42vh;

  // transform: translate(0px);
}

.deer {
  // @include layers(8, auto, 44%, -11deg, 1);
  transform: rotate(30deg) translateY(-50px);
  left: 49vw;
  bottom: 37vh;
}

.lake {
  // @include layers(7, auto, 38%, 41deg, 1);
  transform: rotate(30deg) translateY(-50px);
  left: 51vw;
  bottom: 22vh;
}

.coffee {
  transform: rotate(30deg) translateY(-50px);
  left: 46vw;
  bottom: 10vh;
}

.lego {
  // @include layers(2, auto, 45%, -76deg, 1);
  transform: rotate(30deg) translateY(-50px);
  bottom: 33vh;
  left: 19vw;
}
.workplace {
  // @include layers(9, auto, 35%, -54deg, 1);
  transform: rotate(30deg) translateY(-50px);
  bottom: 24vh;
  left: 12vw;
}

.sportsGirl {
  // @include layers(5, auto, 32%, 101deg, 1);
  transform: rotate(30deg) translateY(-50px);
  bottom: 13vh;
  left: 40vw;
}

.skydiver {
  // @include layers(4, auto, 50%, 34deg, 1);
  transform: rotate(30deg) translateY(-50px);
  bottom: 10vh;
  left: 19vw;
}

.landscape {
  // @include layers(11, auto, auto, 10deg, 1);
  // @include layers(11, auto, auto, 0, 1);
  // @include size(50px);
  // // animation: 40s linear infinite rot;
  // transform: translateY(50px);
  // z-index: 111;
  // transform: rotate(-30deg) translateY(-50px);
  // transform: translate(0px);
  transform: rotate(30deg) translateY(-50px) translateX(-11px);
  left: 33vw;
  bottom: 9vh;
}

.coffee.active,
.lego.active,
.pigeon.active,
.skydiver.active,
.sportsGirl.active,
.workplace.active,
.lake.active,
.deer.active,
.beach.active,
.landscape.active,
.squirrel.active {
  // @include layers(111, auto, auto, 0deg, 2.5);
  border: solid red 1px;
  z-index: 200;
  scale: 1.5;
  transform: translate(-50px, -50px);
  transition: all 0.8s ease 0s;
  position: absolute;
}
</style>
