<script setup></script>

<template>
  <router-link class="button-rout--back" to="/">&laquo; Назад</router-link>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
.button-rout--back {
  background-color: #f1f1f1;
  color: black;

  @include position(absolute, $top: 5vh, $right: 5vw);
}
</style>
