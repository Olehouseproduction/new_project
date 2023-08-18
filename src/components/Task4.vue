<script setup>
import Header from "./ui-components/Header.vue";

import { ref, computed } from "vue";
const userName = ref("");
const showMessage = ref(false);

const greeting = computed(() => {
  if (userName.value) {
    return `Привет, ${userName.value}!`;
  } else {
    return "Введите ваше имя.";
  }
});

const showGreeting = () => {
  showMessage.value = true;
};
</script>
<template>
  <div class="main">
    <Header name="Vue3" />
    <div class="workspace--task4">
      <body>
        <div id="app-container">
          <p v-if="showMessage">{{ greeting }}</p>
          <template v-else>
            <form @submit.prevent="showGreeting">
              <label for="nameInput">Введите ваше имя:</label>
              <input type="text" id="nameInput" v-model="userName" />
              <button type="submit">Отправить</button>
            </form>
          </template>
        </div>
      </body>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f5f5f5;
}

#app-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  width: 400px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #ffd02f;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #be950c;
}

p {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
