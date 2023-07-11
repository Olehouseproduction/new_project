<script setup>
import { ref } from "vue";
import button_back from "./ui-components/button_back.vue";
import btn_task from "./ui-components/btn-task.vue";

let elemHtml = ref();

console.log(elemHtml.value)

const tasks = [
  { name: "Сброс" },
  { name: "Последний становится красным" },
  { name: "Первый и четвертый становятся зелеными" },
  { name: "Отменяет действия первого, и третий становится зеленым" },
  { name: "Отменяет действие второго, и первый пульсирует" },
  { name: "Меняет цвет задника" },
  { name: "Отменяет все и красит всех в розовый" },
  { name: "Добавлет пульсацию рандомному" },
  { name: "Делает рандомного синим" },
  { name: "Делает невидимым рандомного" },
];
</script>

<template>
  <div class="main">
    <!-- <h1 class="name_task">Props</h1> -->
    <h1 :ref="elemHtml" class="name_task">Смена классов (временно)</h1>

    <button_back />

    <div class="workspace-task-3">
      <btn_task
        v-for="(task, i) in tasks"
        :key="'task' + i"
        :name="task.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "../styles/mixin.scss";

.main {
  position: relative;
  @include size(100vw, 100vh);
}
.workspace-task-3 {
  @include size(70%, 50%);
  @include flex(space-around, center);
  margin: 0 auto;
}
</style>
