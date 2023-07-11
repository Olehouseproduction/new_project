<script setup>
import button_back from "./ui-components/button_back.vue";
import gallery_el from "./ui-components/galery_elem.vue";

const gallery = [
  { url: "../../assets/image/4.jpg", type: "cube" },
  { url: "../../assets/image/9.jpg", type: "cube" },
  { url: "../../assets/image/6.jpg", type: "cube" },
  { url: "../../assets/image/7.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/3.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/8.jpg", type: "vertical_rectangle" },
  { url: "../../assets/image/1.jpg", type: "vertical_rectangle" },
  { url: "../../assets/image/2.jpg", type: "vertical_rectangle" },
  { url: "../../assets/image/5.jpg", type: "panorama" },
];
</script>

<template>
  <div class="main">
    <h1 class="name_task">Наслоение</h1>

    <button_back />

    <div class="work-space--2">
      <gallery_el
        v-for="(elem, i) in gallery"
        :key="'elem' + i"
        :class="elem.type"
        :src="elem.url" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.main {
  margin: 0 auto;
  box-sizing: border-box;
  @include size(100%, 100%);
}
.work-space--2 {
  //   @include size(100vw, 100vh);
  //   @include flex(center, center);
  //   overflow-y: scroll;
  // }
}
</style>
