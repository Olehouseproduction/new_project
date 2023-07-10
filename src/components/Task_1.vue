<script setup>
import button_back from "./ui-components/button_back.vue";
import mobile from "./task-components/mobile_layout.vue";
import tablet from "./task-components/tablet_layout.vue";
import desktop from "./task-components/desktop_layout.vue";
import nature from "./task-components/nature_layout.vue";
// import Button_link from "./ui-components/button_link.vue";
</script>

<template>
  <div class="main">
    <h1 class="name_task">Позиционирование</h1>
    <div class="work-space--task1">
      <!-- <button_link :to="'/'" :name="'&laquo;Назад'" /> -->
      <section class="buttons">
        <button class="btn_transform">Кликни</button>
        <button_back />
      </section>
      <section class="color_blocks">
        <mobile />
        <tablet />
        <desktop />
      </section>
      <section class="naturе">
        <nature />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.main {
  margin: 0 auto;
  box-sizing: border-box;
  @include size(100%, 100%);

  .work-space--task1 {
    @include size(100vw, 100vh);
    overflow-y: scroll;
  }

  .buttons {
    display: flex;
    gap: 84vw;
    justify-content: space-around;
  }

  .color_blocks {
    display: flex;
    justify-content: space-evenly;
    margin-top: 3%;
    text-transform: uppercase;
  }

  .btn_transform {
    display: flex;
    align-items: center;
    justify-content: center;
    @include size(6rem);
    border-radius: 50%;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;

    // &:hover {
    //   transform: scale(1.2);
    //   transition: all 350ms ease-in;
    // }

    background: linear-gradient(
      #ff3155 0%,
      #ff3155 25%,
      #ffaf42 25%,
      #ffaf42 50%,
      #ffed5e 50%,
      #ffed5e 75%,
      #2daefd 75%
    );

    animation: gradient 10s infinite linear;

    @keyframes gradient {
      to {
        background-position: 0 12.5em;
      }
    }

    transform: scale(0.85);
    animation: rip 2s ease-in-out infinite;

    @keyframes rip {
      from {
        transform: scale(0.85);
      }
      50% {
        transform: scale(1);
      }
      to {
        transform: scale(0.85);
        background-position: 0 12.5em;
      }
    }
  }
  // .nature {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   width: 50%;
  // }
}
</style>
