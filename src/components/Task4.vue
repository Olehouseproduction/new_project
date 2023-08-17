<script setup>
import Header from "./ui-components/Header.vue";

import { ref, computed } from "vue";

const userName = ref(""); // userName - это реактивная переменная, связанная с полем ввода имени. Она хранит значение, которое пользователь вводит в поле ввода. Когда значение userName изменяется, благодаря использованию ref, Vue автоматически обнаруживает это изменение и обновляет DOM.
const showMessage = ref(false); // showMessage - это реактивная переменная, которая отвечает за показ/скрытие приветствия. Изначально она установлена в false, что означает, что приветствие не должно отображаться. Когда пользователь нажимает кнопку "Отправить", функция showGreeting меняет значение showMessage на true, что приводит к отображению приветствия в шаблоне.

const greeting = computed(() => {
  if (userName.value) {
    return `Привет, ${userName.value}!`;
  } else {
    return "Введите ваше имя.";
  }
});

// Здесь мы проверяем, есть ли значение в переменной userName. .value используется для доступа к значению, хранящемуся в реактивной переменной userName. Если userName имеет значение (т.е. не пустое), то мы возвращаем строку приветствия вида Привет, Имя!, где Имя заменяется на реальное имя пользователя из userName. В противном случае (если userName пустое), возвращается строка "Введите ваше имя.". Суть этой части кода заключается в том, что она создает свойство greeting, которое автоматически меняется в зависимости от значения userName. Когда пользователь вводит имя в поле ввода, userName изменяется, и тогда greeting пересчитывается и обновляется, отражая новое приветствие на экране.

const showGreeting = () => {
  showMessage.value = true;
};
</script>

<template>
  <div class="main">
    <!-- <Header name="Landing Page" /> -->
    <Header name="Vue3" />
    <div class="workspace--task4">
      <body>
        <div id="app-container">
          <label for="nameInput">Введите ваше имя:</label>
          <input type="text" id="nameInput" v-model="userName" />
          <!-- Здесь используется директива v-model, которая связывает значение ввода с переменной userName. То есть, если пользователь вводит текст в это поле, значение будет автоматически присвоено переменной userName. -->
          <button @click="showGreeting">Отправить</button>
          <!-- Здесь используется директива @click, чтобы связать событие клика на кнопке с функцией showGreeting. Это означает, что при клике на кнопку будет выполнена функция showGreeting. -->
          <p v-if="showMessage">{{ greeting }}</p>
          <!-- Здесь используется директива v-if, которая проверяет значение переменной showMessage. Если она равна true, то элемент будет отображен на экране. Внутри элемента выводится содержимое переменной greeting, которое определено в ранее объявленной вычисляемой переменной greeting. -->
        </div>
      </body>
      <!--  -->
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
  color: black;
}

#app {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
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

p {
  font-size: 18px;
  font-weight: bold;
}
</style>
