<script setup></script>

<template class="unit">
  <div class="wrap">
    <div class="header font">header</div>
    <div class="menu font">menu</div>
    <div class="hero font">hero</div>
    <div class="main1 font">main</div>
    <div class="banner">banner</div>
    <div class="extra">extra</div>
    <div class="image">image</div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";

.wrap {
  grid-template-columns: 6vh 9.4vw 6vw;
  grid-template-rows: 4.5vh 18.3vh 17.1vh 9vh 8vh;
  display: grid;
}

.wrap > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  background-color: #17112b;
  // color: white;
  grid-column: 1/4;
}

.font {
  color: white;
}

.menu {
  background-color: #ee3c52;
  grid-row: 3/6;
  grid-column: 1;
}

.hero {
  background-color: #4c86c6;

  grid-column: 1/4;
}

.main1 {
  background-color: #24344b;

  grid-column: 2/4;
}

.image {
  background-color: #c1e4e6;
  grid-row: 5;
  grid-column: 2/2;
}

.extra {
  background-color: #4dbd97;
  grid-column: 3/4;
  grid-row: 5;
}

.banner {
  background-color: #fed269;
  grid-column: 2/4;
}
</style>
