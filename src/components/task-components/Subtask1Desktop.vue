<script setup></script>
<template>
  <div class="wrapper">
    <div class="header name_caption">header</div>
    <div class="menu name_caption">menu</div>
    <div class="hero name_caption">hero</div>
    <div class="main1 name_caption">main</div>
    <div class="banner">banner</div>
    <div class="extra">extra</div>
    <div class="image">image</div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";

.wrapper {
  grid-template-columns: repeat(4, 7.5vw);
  grid-template-rows: 5.5vh 26vh repeat(3, 8.5vh);
  display: grid;
  & > div {
    @include flex(center, center);
  }
}

.header {
  background-color: #17112b;
  grid-column: 1/2;
}

.menu {
  background-color: #ee3c52;
  grid-column: 2/5;
}

.hero {
  background-color: #4c86c6;
  grid-column: 1/5;
}

.main1 {
  background-color: #24344b;
  grid-column: 1/3;
  grid-row: 3/5;
}

.image {
  background-color: #c1e4e6;
  grid-column: 4/5;
  grid-row: 3/4;
}

.extra {
  background-color: #4dbd97;
  grid-row: 4;
  grid-column: 4/5;
}

.banner {
  background-color: #fed269;
  grid-column: 1/5;
}
</style>
