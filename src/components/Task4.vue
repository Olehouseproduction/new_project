<template>
  <div class="main">
    <Header name="Vue3" />
    <div class="workspace--task4">
      <body>
        <div id="app-container">
          <template v-if="!showGame">
            <form @submit.prevent="startGame">
              <label for="nameInput">Введите ваше имя:</label>
              <input type="text" id="nameInput" v-model="userNameInput" />
              <button type="submit">Начать игру</button>
            </form>
          </template>
          <template v-else>
            <template v-if="!showResults">
              <p>
                Привет, {{ userName }}! Мы подготовили игру на сложение.
                Погнали!
              </p>
              <div v-for="(question, index) in questions" :key="index">
                <label :for="`answer-${index}`">{{ question.text }}</label>
                <input :id="`answer-${index}`" v-model="question.answer" />
              </div>
              <button @click="checkAnswers">Проверить ответы</button>
            </template>
            <div v-else>
              <div v-for="(result, index) in gameResults" :key="index">
                <p>{{ result }}</p>
              </div>
              <p>Спасибо за игру!</p>
            </div>
          </template>
        </div>
      </body>
    </div>
  </div>
</template>

<script setup>
import Header from "./ui-components/Header.vue";
import { ref } from "vue";

const userNameInput = ref("");
const userName = ref("");
const showGame = ref(false);
const showResults = ref(false);
const gameResults = ref([]);
const questions = ref([]);

const startGame = () => {
  userName.value = userNameInput.value;
  showGame.value = true;
  showResults.value = false;
  gameResults.value = [];
  questions.value = [
    { text: `Сколько будет 2 + 2?`, answer: "" },
    { text: `Сколько будет 5 + 7?`, answer: "" },
    { text: `Сколько будет 10 + 15?`, answer: "" },
    { text: `Сколько будет 8 + 3?`, answer: "" },
    { text: `Сколько будет 6 + 9?`, answer: "" },
  ];
};

const checkAnswers = () => {
  gameResults.value = [];
  questions.value.forEach((question, index) => {
    const answer = parseInt(question.answer);
    if (!isNaN(answer) && answer === correctAnswers[index]) {
      gameResults.value.push(`Верно!`);
    } else {
      gameResults.value.push(`Неверно!`);
    }
  });
  showResults.value = true;
};

const correctAnswers = [4, 12, 25, 11, 15];
</script>

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
