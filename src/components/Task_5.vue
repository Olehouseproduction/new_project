<script setup>
import button_back from "./ui-components/button_back.vue";
</script>

<template>
  <div class="main">
    <div class="workspace workspace--task5">
      <h1 class="name_caption">Game</h1>
      <button_back />
      <!-- <div class="sample">
        <h2>Hello, {{ name }}</h2>
        <input type="text" v-model="name" />
        <button @click="name = ''" :disabled="name.length === 0">X</button>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.sample {
  color: aliceblue;
}
</style>
