<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="AppHeader">
    <h1 class="name_caption">{{ props.name }}</h1>
    <router-link class="button-rout--back" to="/">&laquo;Назад</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "./../../styles/mixin.scss";
.name_caption {
  color: white;
  text-align: center;
  padding: 25px;
  margin: 0 0 0 124px;
  flex-grow: 1;
}

.AppHeader {
  display: flex;
  align-items: center;
}

.button-rout--back {
  margin-right: 2vw;
  @include size(5vw, 5vh);
  @include flex(center, center);
  padding: 30px;
  text-decoration: none;
  border-radius: 10px;
  background-color: #ffd02f;
  color: #000000;
}
</style>
