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
  @include size(7.5em, 3.5em);
  @include font(sans-serif, 1em, 700, none);
  @include flex(center, center);
  background-color: #ffe42c;
  color: #050038;
  border-radius: 3px;
  box-shadow: 10px 10px 20px #1641a0;
  padding: 1em;
  margin-top: 4vh;
  transition: all 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateX(0px) scale(1);
  text-align: center;

  &:hover {
    transform: translateX(50px) scale(1.3);
  }

  &:nth-child(even):hover {
    transform: translateX(-50px) scale(1.3);
  }
}
</style>
