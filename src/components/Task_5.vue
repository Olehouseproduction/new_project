<script setup>
import button_back from "./ui-components/button_back.vue";
</script>

<template>
  <div class="main">
    <div class="workspace workspace--task5">
      <h1 class="name_caption">Game</h1>

      <button_back />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "../styles/mixin.scss";
</style>
