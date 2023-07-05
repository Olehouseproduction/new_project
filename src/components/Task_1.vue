<script setup>
import button_back from "./ui-components/button_back.vue";
import subTask_1 from "./ui-components/task_1_sub-task-1.vue";
import nature from "./ui-components/nature_layout.vue";
</script>

<template>
  <div class="main">
    <h1 class="name_task">Позиционирование</h1>
    <div class="work-space--task1">
      <button_back></button_back>
      <subTask_1/>
      <nature/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "../styles/mixin.scss";

.main {
  width: 100vw;
  height: 100vh;
  font-family: Verdana, Tahoma, sans-serif;
  margin: 0 auto;
  box-sizing: border-box;
}
.work-space--task1{
  @include size (100%, 100%);
  overflow-y: scroll;
}

.wrapper {
  grid-template-columns: 147px 147px 147px 147px;
  grid-template-rows: 41px 243px 80px 80px 80px;
  display: grid;
  & > div {
    @include flex(center, center);
  }
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
}

.button-rout--back {
  @include position(absolute, $top: 5vh, $right: 5vw);
}
</style>
