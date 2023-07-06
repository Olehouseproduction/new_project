<script setup></script>
<template class="unit">
  <div class="wrapper">
    <div class="header">header</div>
    <div class="menu">menu</div>
    <div class="hero">hero</div>
    <div class="main1">main</div>
    <div class="banner">banner</div>
    <div class="extra">extra</div>
    <div class="image">image</div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";

.wrapper {
  grid-template-columns: 147px 147px 147px 147px;
  grid-template-rows: 43px 243px 80px 80px 80px;
  display: grid;
  & > div {
    @include flex(center, center);
  }

  text-align: center;
  & > .header {
    background-color: #17112b;
    color: white;
    grid-column: 1/2;
  }
}

// .header {
//   background-color: #17112b;
//   color: white;
//   grid-column: 1/2;
// }

.menu {
  background-color: #ee3c52;
  color: white;
  grid-column: 2/5;
}

.hero {
  background-color: #4c86c6;
  color: white;
  grid-column: 1/5;
}

.main1 {
  background-color: #24344b;
  color: white;
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
