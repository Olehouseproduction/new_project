<script setup>
import { ref } from "vue";
import button_back from "./ui-components/button_back.vue";
import btn_task from "./ui-components/btn-task.vue";

let elemHtml = ref();

console.log(elemHtml.value);

const tasks = [
  { name: "Сброс" },
  { name: "Последний становится красным" },
  { name: "Первый и четвертый становятся зелеными" },
  { name: "Отменяет действие первого, и третий становится зеленым" },
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
    <!-- <h1 class="name_caption">Props</h1> -->
    <h1 :ref="elemHtml" class="name_caption">Смена классов (временно)</h1>

    <button_back />

    <div class="workspace workspace--task4">
      <btn_task
        v-for="(task, i) in tasks"
        :key="'task' + i"
        :name="task.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.workspace--task4 {
  @include size(70%, 50%);
  @include flex(space-around, center);
  margin: 9% auto;
}
</style>
