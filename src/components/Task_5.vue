<script setup>
import button_back from "./ui-components/button_back.vue";
</script>

<template>
  <div class="main">
    <h1>Game</h1>

    <button_back />
  </div>
</template>

<style lang="scss" scoped>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "../styles/mixin.scss";

.main {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
