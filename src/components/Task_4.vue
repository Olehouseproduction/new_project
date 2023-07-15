<script setup>
import { ref, onMounted } from "vue";
import button_back from "./ui-components/button_back.vue";
import btn_task from "./ui-components/btn-task.vue";

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

let elemTest = ref(null);
console.log(elemTest.value);
onMounted(() => {
  console.log(elemTest.value);
  //   // elemTest.value.classList.add("active");
});

let btn1 = ref(null);
console.log(btn1.value);
onMounted(() => {
  console.log(btn1.value);
});

let space = ref(null);
console.log(space.value);
onMounted(() => {
  console.log(space.value);
  space.value.classList.add("z");
});
</script>

<template>
  <div class="main">
    <!-- <h1 class="name_caption">Props</h1> -->
    <h1 ref="elemTest" class="name_caption">Смена классов (временно)</h1>
    <button_back />
    <div ref="space" class="workspace workspace--task4">
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
.btn-task:first-child {
  display: none;
}
</style>
