<script setup>
// import button_back from "./ui-components/button_back.vue";
</script>

<template>
  <div class="main">
    <h1>Позиционирование</h1>

    <router-link class="button-rout--back" to="/">&laquo; Назад</router-link>
    <!--desctop_layout-->
    <div class="wrapper">
      <div class="header">header</div>
      <div class="menu">menu</div>
      <div class="hero">hero</div>
      <div class="main1">main</div>
      <div class="banner">banner</div>
      <div class="extra">extra</div>
      <div class="image">image</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "../styles/mixin.scss";

.main {
  width: 50vw;
  height: 50vh;
  font-family: Verdana, Tahoma, sans-serif;
  margin: 0 auto;
  box-sizing: border-box;
}

.wrapper {
  grid-template-columns: 147px 147px 147px 147px;
  grid-template-rows: 41px 243px 80px 80px 80px;
  display: grid;
  & > div {
    @include flex(center, center);
  }
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
}

.header {
  background-color: #17112b;
  color: white;
  grid-column: 1/2;
}

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

.button-rout--back {
  @include position(absolute, $top: 5vh, $right: 5vw);
}
</style>
