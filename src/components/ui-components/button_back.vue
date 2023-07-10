<script setup></script>

<template>
  <router-link class="button-rout--back" to="/">&laquo;Назад</router-link>
</template>

<style lang="scss" scoped>
@import "./../../styles/mixin.scss";
.button-rout--back {
  background-color: #ffe42c;
  color: #000000;
  // @include position(absolute, $top: 5vh, $right: 5vw);

  @include size(5vw, 5vh);
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 2em;
}
</style>
