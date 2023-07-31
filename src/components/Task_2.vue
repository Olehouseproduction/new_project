<script setup>
import button_back from "./ui-components/button_back.vue";
import album_el from "./task-components/sub-task-2-album.vue";
import { onMounted, onUpdated, reactive } from "vue";

const surprise = reactive({ id: -1 });

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

// onMounted(() => {
//   let picture = document.querySelectorAll(".photo");
//   picture.addEventListener("mouseover", func);
//   picture.addEventListener("mouseout", func1);

function func() {
  picture.classList.add("active");
  console.log("Курсор над картинкой");
}

function func1() {
  picture.classList.remove("active");
  console.log("Курсор в другом месте");
}
// });
</script>

<template>
  <div>
    <h1 class="name_caption">Наслоение</h1>
    <button_back />
    <div class="workspace workspace--task3">
      <album_el
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

.active {
  // @include layers(111, auto, auto, 0deg, 2.5);
  border: solid red 1px;
  scale: 2;
  z-index: 20000;
  transform: scale(1.5);

  transform: rotate(-360deg);
  transition: all 0.8s ease 0s;

  position: absolute;
}

.landscape {
  // @include layers(11, auto, auto, 10deg, 1.5);
  // @include layers(11, auto, auto, 0, 1);
  // @include size(50px);
  // // animation: 40s linear infinite rot;
  // transform: translateY(50px);

  z-index: 111;
}

.squirrel {
  // @include layers(6, auto, 30%, -42deg, 1.5);
  z-index: 20;
  left: 23%;
  // transform: rotate(45deg) translateX(180px);
}

.workspace--task3 {
  @include flex(center, center);
  margin: 21% auto;

  .photo {
    @include size(28.5em, 18.7em);
    position: absolute;
  }
}
.beach {
  @include layers(10, auto, auto, -35deg, 1);
}

.deer {
  @include layers(8, auto, 44%, -11deg, 1);
  bottom: 22%;
}

.lake {
  @include layers(7, auto, 38%, 41deg, 1);
}

.workplace {
  @include layers(9, auto, 35%, -54deg, 1);
}

.sportsGirl {
  @include layers(5, auto, 32%, 101deg, 1);
  bottom: 37%;
}

.skydiver {
  @include layers(4, auto, 50%, 34deg, 1);
  top: 40%;
}
.pigeon {
  @include layers(3, auto, 50%, -6deg, 1);
  bottom: 41%;
}

.lego {
  @include layers(2, auto, 45%, -76deg, 1);
  bottom: 33%;
}

.coffee {
  @include layers(1, auto, auto, 0, 1);
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
</style>
