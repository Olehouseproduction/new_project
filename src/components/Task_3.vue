<script setup>
import { ref, onMounted } from "vue";
import button_back from "./ui-components/button_back.vue";
import btn_task from "./ui-components/btn-task.vue";

const tasks = [
  { name: "Сброс", refElem: "btnRefresh" },
  { name: "Последний становится красным", refElem: "1" },
  { name: "Первый и четвертый становятся зелеными", refElem: "2" },
  {
    name: "Отменяет действие первого, и третий становится желтым",
    refElem: "3",
  },
  { name: "Отменяет действие второго, и первый пульсирует", refElem: "4" },
  { name: "Меняет цвет задника", refElem: "5" },
  { name: "Отменяет все и красит всех в розовый", refElem: "6" },
  { name: "Добавляет пульсацию рандомному", refElem: "7" },
  { name: "Делает рандомного синим", refElem: "8" },
  { name: "Делает невидимым рандомного", refElem: "9" },
];

let space = ref(null);
function handleClick(task) {
  console.log(task);

  onMounted(() => {
    console.log(space);
  });
  // onMounted(() => {
  //   space.value.style.backgroundСolor = "#ff0000";
  // });

  let allButtons = space.value.children;
  let randomButton = allButtons.item;

  let firstButton = allButtons.item(1);
  let secondButton = allButtons.item(2);
  let thirdButton = allButtons.item(3);
  let fourthButton = allButtons.item(4);
  let fifthButton = allButtons.item(5);
  let sixthButton = allButtons.item(6);
  let seventhButton = allButtons.item(7);
  let eighthButton = allButtons.item(8);
  let ninthButton = allButtons.item(9);

  // let reset = allButtons.item(0);
  if (task == "btnRefresh") {
    firstButton.classList.remove("pink");
    firstButton.classList.remove("pulse");
    secondButton.classList.remove("pink");
    thirdButton.classList.remove("pink");
    fourthButton.classList.remove("pink");
    fifthButton.classList.remove("pink");
    sixthButton.classList.remove("pink");
    seventhButton.classList.remove("pink");
    eighthButton.classList.remove("pink");
    ninthButton.classList.remove("pink");
    ninthButton.classList.remove("red");
    firstButton.classList.remove("green");
    fourthButton.classList.remove("green");
    thirdButton.classList.remove("yellow");

    firstButton.classList.remove("blue");
    firstButton.classList.remove("blue");
    secondButton.classList.remove("blue");
    thirdButton.classList.remove("blue");
    fourthButton.classList.remove("blue");
    fifthButton.classList.remove("blue");
    sixthButton.classList.remove("blue");
    seventhButton.classList.remove("blue");
    eighthButton.classList.remove("blue");
    ninthButton.classList.remove("blue");

    firstButton.classList.remove("pulse");
    firstButton.classList.remove("pulse");
    secondButton.classList.remove("pulse");
    thirdButton.classList.remove("pulse");
    fourthButton.classList.remove("pulse");
    fifthButton.classList.remove("pulse");
    sixthButton.classList.remove("pulse");
    seventhButton.classList.remove("pulse");
    eighthButton.classList.remove("pulse");
    ninthButton.classList.remove("pulse");

    randomButton.classList.remove("invisible");
  }
  // if (task == "btnRefresh") {
  //   console.log(allButtons);
  //   for (const item of allButtons) {
  //     console.log(item, "каждый элемент");
  //   }

  //   allButtons.forEach((item) => {
  //     console.log(item, "каждый элемент", i++);
  //     item.classList.remove("active");
  //     item.classList.remove("green");
  //     item.classList.remove("blue");
  //     item.classList.remove("pulse");
  //     item.classList.remove("delpink");
  //     item.classList.remove("active");
  //     item.classList.remove("invisible");
  //   });
  // }

  // if (task == "btnRefresh") {
  //   let drop =  ;
  // }

  if (task == "1") {
    ninthButton.classList.add("red");
  }

  if (task == "2") {
    firstButton.classList.add("green");
    fourthButton.classList.add("green");
  }

  if (task == "3") {
    thirdButton.classList.add("yellow");
    ninthButton.classList.remove("red");
  }

  if (task == "4") {
    firstButton.classList.add("pulse");
    firstButton.classList.remove("green");
    fourthButton.classList.remove("green");
  }

  if (task == "5") {
    let background = document.querySelector("body");
    background.classList.add("active");
  }

  if (task == "6") {
    // allButtons.classList.add("pink");
    // let allButtons = space.value.children;
    firstButton.classList.add("pink");
    secondButton.classList.add("pink");
    thirdButton.classList.add("pink");
    fourthButton.classList.add("pink");
    fifthButton.classList.add("pink");
    sixthButton.classList.add("pink");
    seventhButton.classList.add("pink");
    eighthButton.classList.add("pink");
    ninthButton.classList.add("pink");
    thirdButton.classList.remove("yellow");
  }

  if (task == "7") {
    let rand = Math.floor(Math.random() * allButtons.length);

    for (let i = 0; i < allButtons.length; i++) {
      if (i == rand) {
        let randomButton = allButtons.item(i);
        // (".only:not(.pulse)")
        randomButton.classList.add("pulse");
      }
    }
  }

  if (task == "8") {
    let rand = Math.floor(Math.random() * allButtons.length);
    for (let i = 0; i < allButtons.length; i++) {
      if (i == rand) {
        let randomButton = allButtons.item(i);
        randomButton.classList.add("blue");
        randomButton.classList.remove("pink");
        randomButton.classList.remove("active");
        randomButton.classList.remove("pulse");
      }
    }
  }

  if (task == "9") {
    let rand = Math.floor(Math.random() * allButtons.length);
    for (let i = 0; i < allButtons.length; i++) {
      if (i == rand) {
        let randomButton = allButtons.item(i);
        randomButton.classList.add("invisible");
        // (".only:not(.invisible)")
      }
    }
  }
}
</script>

<template>
  <div class="main">
    <h1 class="name_caption">Смена классов</h1>
    <button_back />
    <div ref="space" class="workspace workspace--task4">
      <btn_task
        :index="i++"
        v-for="(task, i) in tasks"
        :key="'task' + i"
        :name="task.name"
        ref="btnRefresh"
        @click="handleClick(task.refElem)" />
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
