<script setup>
  import Button_link from "../components/ui-componets/button_link.vue"
</script>
<template>
  <div class="main">
    <h1>Позиционирование</h1>
    <!-- Кнопка назад! -->
    <Button_link
    :to="'/'"
    :name="'Назад'"
    />
    <!-- //Кнопка назад! -->
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

<!-- <template>
  <div class="main">
    <h1>Позиционирование</h1>
    <router-link class="button-rout" to="/">Назад</router-link>
    <section class="blocks">
      <div class="wrapper">
        <div>
          <div class="header">header</div>
          <div class="menu">menu</div>
        </div>
        <div class="hero">hero</div>
        <div class="main1">main</div>
        <div>
          <div class="image">image</div>
          <div class="extra">extra</div>
        </div>
        <div class="banner">banner</div>
      </div>
    </section>
  </div>
</template> -->

<style lang="scss" scoped>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "../styles/mixin.scss";

.main {
  width: 50vw;
  height: 50vh;
  // margin: 0 auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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

.button-rout {
  @include position(absolute, $top: 5vh, $right: 5vw);
}
</style>
