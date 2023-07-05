<script setup></script>

<template>
  <div class="main">
    <h1>Позиционирование</h1>
    <router-link class="button-rout--back" to="/">&laquo; Назад</router-link>
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
@import "../styles/mixin.scss";

.main {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.blocks {
  @include size(100vw, 100vh);
  margin: 0 auto;
  @include flex(center, center, column);
}

.wrapper {
  grid-template-columns: 7.5vw;
  grid-template-rows: 40px 40px 100px 100px 78px 78px 78px;
  display: grid;
  & > div {
    @include flex(center, center);
  }
  justify-content: center;
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
}

.menu {
  background-color: #ee3c52;
  color: white;
}

.hero {
  background-color: #4c86c6;
  color: white;
}

.main1 {
  background-color: #24344b;
  color: white;
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

.button-rout--back {
  @include position(absolute, $top: 5vh, $right: 5vw);
}
</style>
