<script setup>
import { ref } from "vue";

// import HelloWorld from './components/HelloWorld.vue'

let isActive = ref(true);
function switchClass() {
  isActive.value = !isActiv.value;
}
</script>

<template>
  <router-view v-slot="{ Component }">
    <!--Transition позволяет делать красивые переходы между роутами-->
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view>
</template>

<style lang="scss">
@import "./styles/main.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<!--v-enter-active: Означает активное состояние анимации появления элемента
  v-leave-active: Означает активное состояние анимации исчезновения
  
  v-enter-from: Означает начало анимации появления элемента
  v-leave-to: Означает завершение анимации исчезновения элемента  -->
