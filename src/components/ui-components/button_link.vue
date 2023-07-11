<!--Пропсы влияют на отображение тимплейтов и несут в себе информацию. Мы будем передавать пропсы из одного компонента в другой -->

<script setup>
// Создаем пропсы
const props = defineProps({
  url: String,
  name: String,
});
</script>

<template>
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
  // можно использовать mixin 
  // height: auto; fit-content;
  width: 7em;
  // Зачем тут используется свойство top
  // top: 0.6em;
  // необходимо завернуть в миксин 
  font-family: "Open Sans", sans-serif;
  font-size: 2em;
  font-weight: 700;
  text-decoration: none;
  background-color: #ffe42c;
  padding: 1em;
  z-index: 1;
  margin-top: 6vh;
  // опять пиксели 
  margin-left: -50px;
  color: #333;
  // необходимо удалить
  // animation-name: circle;
  // animation-play-state: running;

  // не забывать про обрастные трансформы в дефолтное состояние 
  // избежать резких скачков

  transition: all 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateX(0px) scale(1);

  &:hover {
    transform: translateX(50px) scale(1.2);
  }
}
</style>
