<script setup>
import { ref } from "vue";

// import HelloWorld from './components/HelloWorld.vue'

let isActive = ref(true);
function switchClass() {
  isActive.value = !isActiv.value;
}
</script>

<template>
  <router-view v-slot="{Component}">
    <!-- добавляем Transition 
    он позволяет делать красивые переходы между нашими роутами
    -->
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
    <!-- добавляем Transition -->
  </router-view>
</template>

<style lang="scss">
@import "./styles/mixin.scss";
  #app{
    @include size(100%, 100%);
    @include flex(center,center);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
