<script setup>
  import { ref, onMounted } from "vue";
  import Button_link from "../components/ui-componets/button_link.vue"
  import Button_task from "../components/ui-componets/button_task.vue"
  const tasks = [
    {name:'Последний становится красным'},
    {name:'Первый и четвертый становятся зелеными'},
    {name:'Отменяет действие второго и первый пульсирует'},
    {name:'Отменяет действия первого и третий становится зеленым'},
    {name:'Отменяет все и красит всех в розовый'},
    {name:'Меняет цвет задника'},
    {name:'Делает рандомного синим'},
    {name:'Добавлет пульсацию рандомному'},
    {name:'Делает невидимым рандомного'},
  ]
  
  let elemTest = ref(null);
  console.log(elemTest.value)
  onMounted(( ) => {
    console.log(elemTest.value)
    elemTest.value.classList.add("active")
  })
  window.local = {}
  local.elem = elemTest

</script>


<template>
  <div class="main">
    <h1 class="test" ref="elemTest">Смена классов</h1>

    <!-- Кнопка назад! -->
    <Button_link
    :to="'/'"
    :name="'Назад'"
    />
    <!-- //Кнопка назад! -->
    <!-- Дальше добавляем наши кнопки 
    так как они повторяются так же добавляем их через v-for 
    -->
    <div class="workspace-task-3">
      <Button_task v-for="task, i in tasks"
      :key="'tesk' + i"
      :name="task.name"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Если мы хотим использовать наши заранее заготовленные mixin,
// то их надо в начале добавить в этот тимплейт с помощью import
@import "../styles/mixin.scss";

.main {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.button-rout {
  @include position(absolute, $top: 5vh, $right: 5vw);
}
.workspace-task-3{
  @include size(70%, 50%);
  @include flex(space-around, center);
  margin: 0 auto;
}
</style>

