<script setup>
// import button_link from "./ui-components/button_link.vue";
</script>

<template>
  <div class="main">
    <!-- <button_link /> -->
    <router-link class="button-rout" to="/task_1">Задание 1</router-link>
    <router-link class="button-rout" to="/task_2">Задание 2</router-link>
    <router-link class="button-rout" to="/task_3">Задание 3</router-link>
    <router-link class="button-rout" to="/task_4">Задание 4</router-link>
    <router-link class="button-rout" to="/task_5">Задание 5</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.main {
  @include size(100vw, 100vh);
  margin: 0 auto;
  @include flex(center, center);
  position: relative;
}

.button-rout {
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 20px 60px;
  position: relative;
  border: 2px solid #fefefe;
  border-radius: 10%;
  color: #fefefe;
  font-family: "Montserrat", sans-serif;
  transition: 0.4s;
  &:hover {
    transform: scale(1.2);
  }
  &:after {
    content: "";
    @include position(absolute, 0, 0, 0, 0);
    @include position(absolute, $top: 10px, $left: 10px);
    @include size(100%, 100%);

    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 10%;
    transition: 0.4s;
  }
}

.button-rout:after {
  content: "";
  @include position(absolute, 0, 0, 0, 0);
  @include size(100%, 100%);

  margin: auto;
  border: 2px solid #fefefe;
  transition: 0.4s;
}

.button-rout:hover:after {
  border-color: #fefefe;
  width: calc(100% - 10px);
  height: calc(100% + 10px);
}
</style>
