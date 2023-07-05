<script setup>
import { ref } from "vue";
import Button_link from "../components/ui-componets/button_link.vue"

const count = ref(0);
const links = [
  {url: "/task_1", name: "Задание #1"},
  {url: "/task_2", name: "Задание #2"},
  {url: "/task_3", name: "Задание #3"},
  {url: "/task_4", name: "Задание #4"},
  {url: "/task_5", name: "Задание #5"},
  {url: "/task_5", name: "Задание #6"},
]
</script>

<template>
  <div class="main">
    <!-- кнопки перехода по нашим заданиям
    так как элементы повторяются мы создали отдельный компонент
    в него мы передаем 2 параметра
    1 - это адрес куда мы переходим 
    2 - имя кнопки 
    мы используем vue метод для этого 
    такоей как v-for
    -->
    <Button_link v-for="link, i in links"
      :key="'link' + i"
      :to="link.url"
      :name="link.name"
    />
    <!-- кнопки перехода по нашим заданиям-->
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.main {
  @include flex(space-around, center);
  @include size(50%, 50%);
  background: #1b2631;
  margin: 0 auto;
  position: relative
}
</style>
