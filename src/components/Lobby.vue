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
  background-image: url("../assets/image/daisy.jpg");
  @include size(100vw, 100vh);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.button-rout {
  border-radius: 0px 10px 10px 0px;
  box-shadow: 10px 5px 5px #0a0907;
  // margin-left: 10vw;
  width: 15%;
  top: 40%;
  font-family: "Open Sans", sans-serif;
  background-color: #ffe42c;
  padding: 28px;
  z-index: 999;
  font-size: 2em;
  font-weight: 700;
  text-decoration: none;
  margin-top: 6vh;
  color: #333;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
}
</style>
