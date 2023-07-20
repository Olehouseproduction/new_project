<script setup>
import { ref, onMounted } from "vue";
import button_back from "./ui-components/button_back.vue";
import btn_task from "./ui-components/btn-task.vue";

const tasks = [
  { name: "Сброс", refElem: "btnRefresh" },
  { name: "Последний становится красным", refElem: "ele" },
  { name: "Первый и четвертый становятся зелеными", refElem: "ele" },
  {
    name: "Отменяет действие первого, и третий становится зеленым",
    refElem: "ele",
  },
  { name: "Отменяет действие второго, и первый пульсирует", refElem: "ele" },
  { name: "Меняет цвет задника", refElem: "ele" },
  { name: "Отменяет все и красит всех в розовый", refElem: "ele" },
  { name: "Добавлет пульсацию рандомному", refElem: "ele" },
  { name: "Делает рандомного синим", refElem: "ele" },
  { name: "Делает невидимым рандомного", refElem: "ele" },
];

let btnRefresh = ref([]);

onMounted(() => {
  console.log(btnRefresh);
});
</script>

<template>
  <div class="main">
    <h1 class="name_caption">Смена классов</h1>
    <button_back />
    <div ref="space" class="workspace workspace--task4">
      <btn_task
        v-for="(task, i) in tasks"
        :key="'task' + i"
        :name="task.name"
        ref="btnRefresh" />
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
