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
  </div>
</template>

<style lang="scss" scoped>
body {
  background: #1b2631;
  margin: 0 auto;
  box-sizing: border-box;
}
//Стили body не подгружаются
.main {
  background: #1b2631;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
}

.button-rout:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  border: 2px solid rgba(0, 0, 0, 0);
  transition: 0.4s;
}
.button-rout:hover:after {
  border-color: #f1c40f;
  width: calc(100% - 10px);
  height: calc(100% + 10px);
}

//   //Вносить изменения сюда
// }
</style>
