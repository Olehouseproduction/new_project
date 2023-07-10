<script setup></script>

<template class="unit">
  <section class="blocks">
    <div class="header font">header</div>
    <div class="menu font">menu</div>
    <div class="hero font">hero</div>
    <div class="main1 font">main</div>
    <div class="banner">banner</div>
    <div class="extra">extra</div>
    <div class="image">image</div>
  </section>
</template>
<style lang="scss" scoped>
@import "src/styles/mixin.scss";

.blocks {
  grid-template-columns: 7.5vw;
  grid-template-rows: 4.5vh 4.5vh 12vh 12vh 8vh 8vh 8vh;
  display: grid;
  & > div {
    @include flex(center, center);
  }
}

.font {
  color: white;
}

.header {
  background-color: #17112b;
}

.menu {
  background-color: #ee3c52;
}

.hero {
  background-color: #4c86c6;
}

.main1 {
  background-color: #24344b;
}

.image {
  background-color: #c1e4e6;
}

.extra {
  background-color: #4dbd97;
}

.banner {
  background-color: #fed269;
}
</style>
