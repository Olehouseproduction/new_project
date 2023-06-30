<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="main">
    <h1>Game</h1>
    <!-- Кнопка назад! -->
    <router-link class="button-rout" to="/">Назад</router-link>
    <!-- //Кнопка назад! -->
  </div>
</template>

<style lang="scss" scode>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "../styles/mixin.scss";

.main {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.button-rout {
  @include position(absolute, $top: 5vh, $right: 5vw);
}
</style>
