<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="main">
    <!-- кнопки перехода по нашим заданиям-->
    <router-link class="button-rout" to="/task_1">Задание 1</router-link>
    <router-link class="button-rout" to="/task_2">Задание 2</router-link>
    <router-link class="button-rout" to="/task_3">Задание 3</router-link>
    <router-link class="button-rout" to="/task_4">Задание 4</router-link>
    <router-link class="button-rout" to="/task_5">Задание 5</router-link>
    <div>
      <router-link class="button-rout" to="/task_5">Задание 6</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
//Стили body не подгружаются
.main {
  background: #1b2631;
  @include size(100vw, 100vh); 
  margin: 0 auto;
  @include flex(center, center, column);
  position: relative;
  .button-rout{
    background-color: white;
    &:hover{
      transform: scale(2);
    }
  }
  div{
    .button-rout{
      background-color: darkolivegreen;
    }
  }
}

.button-rout {
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 20px 60px;
  position: relative;
  border: 2px solid #f1c40f;
  color: #f1c40f;
  font-family: "Montserrat", sans-serif;
  transition: 0.4s;
  &:after {
    content: "";
    @include position(absolute, 0, 0, 0, 0);
    @include position(absolute, $top: 10px, $left: 10px);
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }
}

.button-rout:hover:after {
  border-color: #f1c40f;
  width: calc(100% - 10px);
  height: calc(100% + 10px);
}
</style>
