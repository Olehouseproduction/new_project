<script setup></script>

<template>
  <div class="main">
    <h1>Позиционирование</h1>
    <section class="blocks">
      <div class="wrapper">
        <div class="header">header</div>
        <div class="menu">menu</div>
        <div class="hero">hero</div>
        <div class="main1">main</div>
        <div class="banner">banner</div>
        <div class="extra">extra</div>
        <div class="image">image</div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "src/styles/mixin.scss";
.main {
  width: 50vw;
  height: 80vh;
  margin: 0 auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.wrapper {
  grid-template-columns: 92px 184px 97px;
  grid-template-rows: 41px 162px 162px 80px 82px;
  display: grid;
  justify-content: center;
}

.wrapper > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  text-align: center;
}

.blocks {
  text-transform: uppercase;
}

.header {
  background-color: #17112b;
  color: white;
  grid-column: 1/4;
}

.menu {
  background-color: #ee3c52;
  color: white;
  grid-row: 3/6;
  grid-column: 1;
}

.hero {
  background-color: #4c86c6;
  color: white;
  grid-column: 1/4;
}

.main1 {
  background-color: #24344b;
  color: white;
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

.button-rout {
  @include position(absolute, $top: 5vh, $right: 5vw);
}
</style>
