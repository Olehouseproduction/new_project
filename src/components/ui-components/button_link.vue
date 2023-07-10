<!--Пропсы влияют на отображение тимплейтов и несут в себе информацию. Мы будем передавать пропсы из одного компонента в другой -->

<script setup>
// Создаем пропсы
const props = defineProps({
  url: String,
  name: String,
});
</script>

<template>
  <!-- <router-link class="button-rout" to="/task_1">name</router-link> -->

  <!-- <router-link class="button-rout" to="/task_1">Задание 1</router-link> 
  Это модицифицируется. Чтобы использовать переменные - мы меняем запись
  Теперь мы можем обращаться к пропсам по ключу. После этого, нам надо указать эти пропсы в Lobby
  -->
  <router-link class="button-rout" :to="props.url">{{
    props.name
  }}</router-link>
</template>

<style lang="scss" scoped>
@import "./../../styles/mixin.scss";

.button-rout {
  // border-radius: 0 1.2em 1.2em 0;
  border-radius: 0.2em;
  box-shadow: #0a0907;
  width: 7em;
  top: 0.6em;
  font-family: "Open Sans", sans-serif;
  background-color: #ffe42c;
  padding: 1em;
  z-index: 1;
  font-size: 2em;
  font-weight: 700;
  text-decoration: none;
  margin-top: 6vh;
  margin-left: -50px;
  color: #333;
  animation-name: circle;
  animation-play-state: running;

  &:hover {
    transition: all 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translateX(50px) scale(1.2);
  }
}
</style>
