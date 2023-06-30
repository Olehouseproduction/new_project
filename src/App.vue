<script setup>
import { ref } from "vue";

// import HelloWorld from './components/HelloWorld.vue'

let isActive = ref(true);
function switchClass() {
  isActive.value = !isActiv.value;
}
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import "./styles/main.scss";
</style>
