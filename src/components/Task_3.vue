<script setup>
import { reactive } from "vue";
import button_back from "./ui-components/button_back.vue";
import btn_task from "./task-components/sub-task-3-btn-task.vue";

const surprise = reactive({ example: false });

const tasks = reactive([
  {
    name: "Последний становится красным",
    handler() {
      tasks[8].isRed = true;
    },
  },
  {
    name: "Первый и четвертый становятся зелеными",
    handler() {
      tasks[0].isGreen = true;
      tasks[3].isGreen = true;
    },
  },
  {
    name: "Отменяет действие первого, и третий становится желтым",
    handler() {
      tasks[2].isYellow = true;
    },
  },
  {
    name: "Отменяет действие второго, и первый пульсирует",
    handler() {
      tasks[0].isPulsing = true;
      tasks[0].isGreen = false;
      tasks[3].isGreen = false;
    },
  },
  {
    name: "Меняет цвет задника",
    handler() {
      surprise.example = true;
    },
  },
  {
    name: "Отменяет все и красит всех в розовый",
    handler() {
      refresh();
      tasks.forEach((item) => {
        item.isPink = true;
      });
    },
  },
  {
    name: "Добавляет пульсацию рандомному",
    handler() {
      function checkNotPulsing(btn) {
        return !btn.isPulsing;
      }
      const notPulseBtn = tasks.filter(checkNotPulsing);
      const rand = Math.floor(Math.random() * notPulseBtn.length);
      notPulseBtn[rand].isPulsing = true;
    },
  },
  {
    name: "Делает рандомного синим",
    handler() {
      function checkNotBlue(btn) {
        return !btn.isBlue;
      }
      const notBlueBtn = tasks.filter(checkNotBlue);
      const rand = Math.floor(Math.random() * notBlueBtn.length);
      notBlueBtn[rand].isBlue = true;
      notBlueBtn[rand].isPink = false;
    },
  },
  {
    name: "Делает невидимым рандомного",
    handler() {
      function checkNotInvisible(btn) {
        return !btn.isInvisible;
      }
      const notInvisBtn = tasks.filter(checkNotInvisible);
      const rand = Math.floor(Math.random() * notInvisBtn.length);
      notInvisBtn[rand].isInvisible = true;
    },
  },
]);

function refresh() {
  tasks.forEach((item) => {
    item.isBlue = false;
    item.isRed = false;
    item.isPulsing = false;
    item.isGreen = false;
    item.isPink = false;
    item.isYellow = false;
    item.isInvisible = false;
    item.isActive = false;
  });
  surprise.example = false;
}
</script>

<template>
  <div class="main" :class="{ fond: surprise.example }">
    <h1 class="name_caption">Смена классов</h1>
    <button_back />
    <div class="workspace workspace--task4">
      <btn_task name="Сброс" @click="refresh" />
      <btn_task
        :name="task.name"
        v-for="(task, i) in tasks"
        :key="'task' + i"
        :is-blue="task.isBlue"
        :is-red="task.isRed"
        :is-pulse="task.isPulsing"
        :is-pink="task.isPink"
        :is-yellow="task.isYellow"
        :is-green="task.isGreen"
        :is-invisible="task.isInvisible"
        @click="task.handler" />
      <br />
      <div class="picture"></div>
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

main {
  transition: all 350ms linear;
}
.picture {
  background-image: url(..//assets/image/bird2.png);
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  width: 246px;
  height: 246px;
  margin: 0;
  padding: 0;
  bottom: 5%;
  right: 5%;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 4px 5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 0, 0, 0.6);
  object-fit: contain;
}

.fond {
  background: radial-gradient(
    farthest-corner circle at 100% 0%,
    #00dfff 11% 11%,
    #8c00ea 50%,
    #00f3db 84% 84%
  );

  background-size: cover;
  transition: all 1s linear; // Почему не срабатывает плавность перехода?
}

// .fond.active {
//   background-color: radial-gradient(
//     farthest-corner circle at 100% 0%,
//     #00dfff 11% 11%,
//     #8c00ea 50%,
//     #00f3db 84% 84%
//   );
// }
</style>
