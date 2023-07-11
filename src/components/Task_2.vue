<script setup>
  import Button_link from "../components/ui-componets/button_link.vue"
  import Gallery_elem from "./ui-componets/gallery_elem.vue";
  const gallery = [
    {url: "src/assets/image/2.jpg", type: "cube"},
    {url: "src/assets/image/2.jpg", type: "cube"},
    {url: "src/assets/image/2.jpg", type: "vert"},
    {url: "src/assets/image/2.jpg", type: "cube"},
    {url: "src/assets/image/2.jpg", type: "vert"},
  ]
</script>

<template>
  <div class="main">
    <h1>Наслоение</h1>
    <!-- Кнопка назад! -->
    <Button_link
    :to="'/'"
    :name="'Назад'"
    />
    <!-- //Кнопка назад! -->
    <div class="work-space--2">
      <Gallery_elem v-for="elem, i in gallery"
      :key="'elem' + i"
      :class="elem.type"
      :src="elem.url"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "../styles/mixin.scss";

.main {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.work-space--2{
  @include size(100%);
  @include flex(center, center, column);
  overflow: scroll;
}
.button-rout {
  @include position(absolute, $top: 5vh, $right: 5vw);
}
</style>
