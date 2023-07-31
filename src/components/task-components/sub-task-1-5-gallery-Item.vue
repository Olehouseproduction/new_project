<template>
  <div :class="['picture', type]" ref="pictureRef">
    <img :src="src" :alt="type" />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps(["type", "src"]);

const pictureRef = ref(null);

gsap.fromTo(
  pictureRef.value,
  { opacity: 0, y: 50 }, // Начальные значения анимации (положение и прозрачность)
  {
    opacity: 1,
    y: 0,
    duration: 0.5, // Продолжительность анимации
    scrollTrigger: {
      trigger: pictureRef.value,
      start: "top 80%", // Начать анимацию, когда элемент находится на 80% экрана
      end: "top 50%", // Завершить анимацию, когда элемент находится на 50% экрана
      scrub: true, // Анимировать значения свойств объекта по мере прокрутки
    },
  }
);
</script>

<style scoped>
/* Здесь можно добавить стили для изображения или контейнера .picture */
</style>
