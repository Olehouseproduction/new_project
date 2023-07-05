<script setup></script>

<template>
  <main>
    <div class="container">
      <div class="plant">
        <img src="../img/1.jpg" alt="plant on the tree" />
      </div>
      <div class="dog">
        <img src="../img/2.jpg" alt="dog in the grass" />
      </div>
      <div class="bike">
        <img src="../img/3.jpg" alt="bike in the forest" />
      </div>
      <div class="chamomile">
        <img src="../img/4.jpg" alt="forest chamomile" />
      </div>
      <div class="mountains">
        <img src="../img/5.jpg" alt="мountain landscape" />
      </div>
      <div class="grass">
        <img src="../img/6.jpg" alt="grass" />
      </div>
      <div class="sheet">
        <img src="../img/7.jpg" alt="raindrops" />
      </div>
      <div class="stones">
        <img src="../img/8.jpg" alt="river stones" />
      </div>
      <div class="dachshund">
        <img src="../img/9.jpg" alt="dog with ball" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.main {
  @include size(50vw, 80vh);
  margin: 0 auto;
}

.container {
  display: grid;
  grid-template-columns: 548px 415px 400px 457px 580px;
  grid-template-rows: 398px 320px 398px;
  grid-gap: 10px;
  justify-content: center;
}

.container div {
  position: relative;
}

.container img {
  position: absolute;
  width: 90%;
  filter: drop-shadow(16px 16px 20px #ededed);
}

.plant {
  grid-column: 5;
  grid-row: 1/3;
  width: 580px;
  height: 868px;
}

.plant img {
  margin-left: 50px;
  margin-top: 177px;
}

.dog {
  grid-column: 1;
  grid-row: 1/2;
  @include size(580px, 868px);
}

.dog img {
  margin-top: 84px;
  width: 88%;
}

.bike {
  grid-column: 4;
  grid-row: 1;
  width: 457px;
  height: 300px;
}

.bike img {
  margin-top: 87px;
  margin-left: 30px;
}

.chamomile {
  grid-column: 2;
  width: 400px;
  height: 400px;
  margin-top: 40px;
}

.mountains {
  grid-column: 3/4;
  grid-row: 2;
  width: 922px;
  height: 320px;
}

.mountains img {
  height: 90%;
  width: 95%;
}

.grass {
  grid-column: 3;
  grid-row: 1;
  width: 400px;
  height: 400px;
}

.grass img {
  margin-left: 30px;
}

.sheet {
  grid-column: 4;
  grid-row: 3;
  width: 457px;
  height: 300px;
  margin-left: 30px;
}

.stones {
  grid-column: 2;
  grid-row: 2/3;
  width: 411px;
  height: 613px;
}

.stones img {
  margin-top: 60px;
}

.dachshund {
  grid-column: 3;
  grid-row: 3;
  width: 400px;
  height: 400px;
}

.dachshund img {
  margin-left: 30px;
}
</style>
