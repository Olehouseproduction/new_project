<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="main">
    <!-- кнопки перехода по нашим заданиям-->
    <router-link class="button-rout" to="/task_1">Задание №1</router-link>
    <router-link class="button-rout" to="/task_2">Задание №2</router-link>
    <router-link class="button-rout" to="/task_3">Задание №3</router-link>
    <router-link class="button-rout" to="/task_4">Задание №4</router-link>
    <router-link class="button-rout" to="/task_5">Задание №5</router-link>
    <!-- //кнопки перехода по нашим заданиям-->
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
