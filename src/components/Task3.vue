<script setup>
import { reactive } from "vue";
import btn_task from "./task-components/sub-task-3-btn-task.vue";
import Header from "./ui-components/Header.vue";

const surprise = reactive({ example: false }); //изменить названия

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
      tasks[8].isRed = false;
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
    name: "Добавляет пульсацию рандомному", //Рандомные кнопки доработать
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
    name: "Делает рандомного синим", //Рандомные кнопки доработать
    handler() {
      function checkNotBlue(btn) {
        return !btn.isBlue;
      }
      const notBlueBtn = tasks.filter(checkNotBlue);
      const rand = Math.floor(Math.random() * notBlueBtn.length); //Вынести в отдельную функцию общий код рандома
      notBlueBtn[rand].isBlue = true;
      notBlueBtn[rand].isPink = false;
    },
  },
  {
    name: "Делает невидимым рандомного", //Рандомные кнопки доработать
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
    <Header name="Смена классов" />
    <div class="reset-wrap">
      <btn_task class="reset" name="Сброс" @click="refresh" />
    </div>
    <div class="workspace">
      <!--main+компоненты - проверить-->
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
      <!-- <img src="images/keks.jpg" alt="Рыжий кот Кекс лежит у ноутбука."  -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.reset-wrap {
  display: flex;
  .reset {
    background-color: #ffffff;
    height: 5em;
    margin-left: auto;
    margin-right: 2vw;
    padding: 0 50px;
    width: auto;
  }
}
.workspace {
  @include size(70%, 50%);
  @include flex(space-around, center);
  margin: 4% auto;
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
  background-color: purple;
  background-size: cover;
}
</style>
