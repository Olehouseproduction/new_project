<script setup>
import Button_link from "../components/ui-componets/button_link.vue"
</script>
<template>
  <div class="main">
    <h1>Props</h1>
    <!-- Кнопка назад! -->
    <Button_link
    :to="'/'"
    :name="'Назад'"
    />
    <!-- //Кнопка назад! -->
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
.button-rout {
  @include position(absolute, $top: 5vh, $right: 5vw);
}
</style>
