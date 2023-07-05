<script setup></script>

<template>
  <router-link class="button-rout" to="/task_1">name</router-link>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.button-rout {
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 20px 60px;
  position: relative;
  border: 2px solid #f1c40f;
  color: #f1c40f;
  font-family: "Montserrat", sans-serif;
  transition: 0.4s;

  &:after {
    content: "";
    @include size(100%, 100%);
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }
}

.button-rout:hover:after {
  border-color: #f1c40f;
  width: calc(100% - 10px);
  height: calc(100% + 10px);
}
</style>
