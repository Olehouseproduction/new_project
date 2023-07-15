<script setup>
// Импортим компонент
// import { ref } from "vue";
import button_link from "./ui-components/button_link.vue";

//Cоздаем массив объектов с ключами url и name

const links = [
  { url: "/Task_1", name: "Задание 1" },
  { url: "/Task_2", name: "Задание 2" },
  { url: "/Task_3", name: "Задание 3" },
  { url: "/Task_4", name: "Задание 4" },
  { url: "/Task_5", name: "Задание 5" },
];
</script>

<template>
  <div class="main">
    <!-- <video autoplay loop id="myVideo">
      <source src="../assets/video/daisy-stock-h264-video.mp4" />
    </video> -->

    <button_link
      v-for="(link, i) in links"
      :key="'link' + i"
      :to="link.url"
      :name="link.name" />
    <!-- Указываем пропсы. Чем они являются? 
    :to="link.url" Из массива из каждого элемента, который link, мы брали ключ url и отправляли его в :to. Также с name
    -->
    <!-- 1. v-for - это цикл, позволяющий перебирать объекты; 
      link - название может быть любым;
      i - количество итераций; 
      in links - указывает куда надо смотреть (в массив links ); 
      Благодаря этому, если в массив будут добавляться объекты, количество кнопок будет автоматически увеличиваться и наоборот.
      :key - уникальный идентификатор к каждой строке массива (к каждому элементу)
      :key="'link' + i" - каждая кнопка будет вести к первому заданию. Но нам нужно, чтобы использовались ключи, указанные в массиве.
      Возвращаемся в компонент button-link и прописываем prop'ы.
    -->
    <!-- <router-link class="button-rout" to="/task_1">name</router-link> -->
    <!--  Это модицифицируется. Чтобы использовать переменные - мы меняем запись
    Теперь мы можем обращаться к пропсам по ключу. После этого, нам надо указать эти пропсы в Lobby
    -->
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
.main {
  // background-color: #f3f3f3;
  background-image: url(../assets/image/3671442.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  @include size(100vw, 100vh);
  @include flex(center, center, column);
}
// #myVideo {
//   @include size(100%);
//   object-fit: cover;
//   position: fixed;
// }
</style>
