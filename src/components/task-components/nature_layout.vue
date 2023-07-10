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

// .container {
//   margin-top: 10vh;
//   display: grid;
//   grid-template-columns: 34.25em 26em 25em 28.5em 36.2em;
//   grid-template-rows: 25em 20em 25em;
//   grid-gap: 0.6em;
//   justify-content: center;

//   & div {
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-position: center;
//     // @include size(100%, 100%);
//     object-fit: contain;
//     filter: drop-shadow(1em 1em 1.25em #ededed);
//   }
// }

// .plant {
//   background-image: url("../../assets/image/1.jpg");
//   grid-column: 5;
//   grid-row: 1/3;
//   @include size(36em, 54em);
// }

// .dog {
//   background-image: url("../../assets/image/2.jpg");
//   grid-column: 1;
//   grid-row: 1/2;
//   @include size(36em, 54em);
// }

// .bike {
//   background-image: url("../../assets/image/3.jpg");
//   grid-column: 4;
//   grid-row: 1;
//   @include size(28.5em, 18.7em);
//   margin-top: 3.5vh;
// }

// .chamomile {
//   background-image: url("../../assets/image/4.jpg");
//   grid-column: 2;
//   @include size(25em);
// }

// .mountains {
//   background-image: url("../../assets/image/5.jpg");
//   grid-column: 3/4;
//   grid-row: 2;
//   @include size(57.6em, 20em);
// }

// .grass {
//   background-image: url("../../assets/image/6.jpg");
//   grid-column: 3;
//   grid-row: 1;
//   @include size(25em);
// }

// .sheet {
//   background-image: url("../../assets/image/7.jpg");
//   grid-column: 4;
//   grid-row: 3;
//   @include size(28.5em, 18.7em);
// }

// .stones {
//   background-image: url("../../assets/image/8.jpg");
//   grid-column: 2;
//   grid-row: 2/3;
//   @include size(36em, 54em);
// }

// .dachshund {
//   background-image: url("../../assets/image/9.jpg");
//   grid-column: 3;
//   grid-row: 3;
//   @include size(25em);
// }
</style>
