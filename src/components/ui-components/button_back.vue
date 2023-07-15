<script setup></script>

<template>
  <router-link class="button-rout--back" to="/">&laquo;Назад</router-link>
</template>

<style lang="scss" scoped>
@import "./../../styles/mixin.scss";
.button-rout--back {
  @include position(absolute, $top: 5vh, $right: 5vw);
  @include size(5vw, 5vh);
  @include flex(center, center);
  padding: 30px;
  text-decoration: none;
  border-radius: 10px;
  background-color: #ffe42c;
  color: #000000;
}
</style>
