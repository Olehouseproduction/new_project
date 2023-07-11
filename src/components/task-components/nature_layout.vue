<script setup>
const gallery = [
  { url: "../../assets/image/4.jpg", type: "cube" },
  { url: "../../assets/image/9.jpg", type: "cube" },
  { url: "../../assets/image/6.jpg", type: "cube" },
  { url: "../../assets/image/7.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/3.jpg", type: "horizontal_rectangle" },
  { url: "../../assets/image/8.jpg", type: "vertical_rectangle" },
  { url: "../../assets/image/1.jpg", type: "vertical_rectangle" },
  { url: "../../assets/image/2.jpg", type: "vertical_rectangle" },
  { url: "../../assets/image/5.jpg", type: "panorama" },
];
</script>

<template>
  <div class="container">
    <div class="plant"></div>
    <div class="dog"></div>
    <div class="bike"></div>
    <div class="chamomile"></div>
    <div class="mountains"></div>
    <div class="grass"></div>
    <div class="sheet"></div>
    <div class="stones"></div>
    <div class="dachshund"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";

.container {
  margin: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1em;
  height: 48em;
  justify-content: center;
  
  // Стараться задавать унивальные индефикаторы 

  div {
    background-size: contain;
    background-repeat: no-repeat;
    object-fit: contain;
    filter: drop-shadow(0.5em 0.5em 0.2em #d7e4f6);
  }
}

.plant {
  background-image: url("../../assets/image/1.jpg");
  background-position: center;
  grid-column: 5;
  grid-row: 1/3;
}

.dog {
  background-image: url("../../assets/image/2.jpg");
  grid-column: 1;
  grid-row: 1/3;
  background-position: bottom;
}

.bike {
  background-image: url("../../assets/image/3.jpg");
  grid-column: 4;
  grid-row: 1;
  background-position: bottom;
}

.chamomile {
  background-image: url("../../assets/image/4.jpg");
  grid-column: 2;
  background-position: center;
}

.mountains {
  background-image: url("../../assets/image/5.jpg");
  grid-column: 3/5;
  background-position: center;
  grid-row: 2;
}

.grass {
  background-image: url("../../assets/image/6.jpg");
  grid-column: 3;
  grid-row: 1;
  background-position: center;
}

.sheet {
  background-image: url("../../assets/image/7.jpg");
  grid-column: 4;
  grid-row: 3;
}

.stones {
  background-image: url("../../assets/image/8.jpg");
  grid-column: 2;
  grid-row: 2/4;
  background-position: top;
}

.dachshund {
  background-image: url("../../assets/image/9.jpg");
  grid-column: 3;
  grid-row: 3;
  background-position: center;
}
</style>
