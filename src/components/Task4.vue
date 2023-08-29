<script setup>
import { ref, onMounted } from "vue";
import Header from "./ui-components/Header.vue";
const mapContainer = ref(null);
onMounted(() => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://api-maps.yandex.ru/2.1/?apikey=8add511a-3b59-432e-9798-b74fd3eae22b&lang=ru_RU";
  script.onload = () => {
    initializeMap();
  };
  document.head.appendChild(script);
});

const initializeMap = () => {
  if (typeof ymaps === "undefined") return; // Ensure ymaps is loaded

  let map = new ymaps.Map(mapContainer.value, {
    center: [48.85316562160329, 2.3496804430999814],
    zoom: 17,
  });
};
</script>

<template>
  <div class="main">
    <Header name="Landing Page" />
    <div class="workspace--task4">
      <div id="map-test" class="map"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.map {
  width: 500px;
  height: 500px;
  background-color: #333;
}
</style>

<!--ТОЧКА-->
