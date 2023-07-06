<script setup></script>

<template class="nat">
  <div class="inner">
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
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";

.inner {
  display: flex;
  justify-content: center;
  width: auto;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}

.container {
  margin-top: 10vh;
  display: grid;
  grid-template-columns: 548px 415px 400px 457px 580px;
  grid-template-rows: 398px 320px 398px;
  grid-gap: 10px;
  justify-content: center;
}

.container div {
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.container img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(16px 16px 20px #ededed);
}

.plant {
  background-image: url("../../assets/image/1.jpg");
  grid-column: 5;
  grid-row: 1/3;
  width: 580px;
  height: 868px;
}

// .plant img {
//   margin-left: 50px;
//   margin-top: 177px;
// }

.dog {
  background-image: url("../../assets/image/2.jpg");
  grid-column: 1;
  grid-row: 1/2;
  @include size(580px, 868px);
}

.bike {
  background-image: url("../../assets/image/3.jpg");
  grid-column: 4;
  grid-row: 1;
  width: 457px;
  height: 300px;
}

// .bike img {
//   margin-top: 87px;
//   margin-left: 30px;
// }

.chamomile {
  background-image: url("../../assets/image/4.jpg");
  grid-column: 2;
  width: 400px;
  height: 400px;
  margin-top: 40px;
}

.mountains {
  background-image: url("../../assets/image/5.jpg");
  grid-column: 3/4;
  grid-row: 2;
  width: 922px;
  height: 320px;
}

// .mountains img {
//   height: 90%;
//   width: 95%;
// }

.grass {
  background-image: url("../../assets/image/6.jpg");
  grid-column: 3;
  grid-row: 1;
  width: 400px;
  height: 400px;
}

// .grass img {
//   margin-left: 30px;
// }

.sheet {
  background-image: url("../../assets/image/7.jpg");
  grid-column: 4;
  grid-row: 3;
  width: 457px;
  height: 300px;
  margin-left: 30px;
}

.stones {
  background-image: url("../../assets/image/8.jpg");
  grid-column: 2;
  grid-row: 2/3;
  width: 411px;
  height: 613px;
}

// .stones img {
//   margin-top: 60px;
// }

.dachshund {
  background-image: url("../../assets/image/9.jpg");
  grid-column: 3;
  grid-row: 3;
  width: 400px;
  height: 400px;
}

// .dachshund img {
//   margin-left: 30px;
// }
</style>
