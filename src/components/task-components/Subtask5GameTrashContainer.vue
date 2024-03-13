<script setup>
import { ref } from "vue";

const winPoint = ref(0);
const losePoint = ref(0);
const trashList = ref([
  { type: "household", url: "assets/image/garbage/apple.png" },
  { type: "dangerous", url: "assets/image/garbage/battery.png" },
  { type: "recyclables", url: "assets/image/garbage/glass.png" },
  { type: "recyclables", url: "assets/image/garbage/paper.png" },
  { type: "mixed", url: "assets/image/garbage/boots.png" },
  { type: "mixed", url: "assets/image/garbage/cottonBuds.png" },
  { type: "mixed", url: "assets/image/garbage/glue.png" },
  { type: "recyclables", url: "assets/image/garbage/milkCarton.png" },
  { type: "recyclables", url: "assets/image/garbage/tin.png" },
  { type: "mixed", url: "assets/image/garbage/tube.png" },
  { type: "mixed", url: "assets/image/garbage/patch.png" },
]);

const elemImg = ref({
  src: "",
  "data-type": "",
});

function clickBug(type) {
  key = elemImg.value.getAttribute("data-type");
  if (type === key && trashList.length > 0) {
    winPoint.value++;
    colorPoints(true);
  }
  if (type != key && trashList.length > 0) {
    losePoint.value++;
    colorPoints(false);
  }
  if (trashList.length === 0) {
    gameOver();
  }
  gameLoop();
}

function gameLoop() {
  if (trashList.value.length >= 1) {
    const rand = Math.floor(Math.random() * trashList.value.length);
    elemImg.value.src = trashList.value[rand].url;
    elemImg.value["data-type"] = trashList.value[rand].type;
    // Важно использовать .value для реактивных переменных
    trashList.value.splice(rand, 1);
  }
}
</script>

<template>
  <div class="counter go-js end-game--js">
    <div class="win">
      <img src="../assets/image/game/ok.png" alt="check_mark" />
      <p class="win-js" v-text="winPoint"></p>
      <!-- <span class="win-js">0</span> -->
    </div>
    <div class="lose">
      <img src="../assets/image/game/no.png" alt="cross_mark" />
      <p class="lose-js" v-text="losePoint"></p>
      <!-- <span class="lose-js">0</span> -->
    </div>
  </div>
  <section class="containers">
    <div
      id="yellow"
      class="dumpster end-game--js"
      data-type="recyclables"
      @click="clickBug('recyclables')">
      <p class="dumpster-text dumpster-text--yellow">Вторсырье</p>

      <div class="wasteboxs">
        <img
          class="dumpster-garbage"
          src="src/assets/image/game/buck_top/wastebox_yellow.png"
          alt="wastebox_yellow" />" alt="wastebox_yellow" />
        <img
          class="dumpster-cap"
          src="src/assets/image/game/buck_top/wastetop_yellow.png"
          alt="wastetop_yellow" />
      </div>
    </div>
    <div
      id="green"
      class="dumpster end-game--js"
      data-type="mixed"
      @click="clickBug('mixed')">
      <p class="dumpster-text dumpster-text--green">Смешанные</p>
      <div class="wasteboxs">
        <img
          class="dumpster-garbage"
          src="src/assets/image/game/buck_top/wastebox_green.png"
          alt="wastebox_green" />
        <img
          class="dumpster-cap"
          src="src/assets/image/game/buck_top/wastetop_green.png"
          alt="wastetop_green" />
      </div>
    </div>
    <div
      id="blue"
      class="dumpster end-game--js"
      data-type="household"
      @click="clickBug('household')">
      <p class="dumpster-text dumpster-text--blue">Бытовые</p>

      <div class="wasteboxs">
        <img
          class="dumpster-garbage"
          src="src/assets/image/game/buck_top/wastebox_blue.png"
          alt="wastebox_blue" />
        <img
          class="dumpster-cap"
          src="src/assets/image/game/buck_top/wastetop_blue.png"
          alt="wastetop_blue" />
      </div>
    </div>
    <div
      id="red"
      class="dumpster end-game--js"
      data-type="dangerous"
      @click="clickBug('dangerous')">
      <p class="dumpster-text dumpster-text--red">Опасные</p>

      <div class="wasteboxs">
        <img
          class="dumpster-garbage"
          src="src/assets/image/game/buck_top/wastebox_red.png"
          alt="wastebox_red" />
        <img
          class="dumpster-cap"
          src="src/assets/image/game/buck_top/wastetop_red.png"
          alt="wastetop_red" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
.containers {
  padding-top: 3vh;
  display: flex;
  justify-content: space-evenly;
}
.dumpster {
  width: 23%;
  position: sticky;
  cursor: pointer;
}

.dumpster-cap {
  width: 76%;
  object-fit: contain;
  position: absolute;
  left: 1.3vw;
  top: 10.5vh;
  z-index: -1;
  transition: top 450ms ease-in;
}

.dumpster:hover .wasteboxs .dumpster-cap {
  top: 2vh;
}

.dumpster-text {
  margin: 50px auto;
}

#yellow .dumpster-text {
  background-color: #ffad00;
}

#green .dumpster-text {
  background-color: #6ec100;
}

#blue .dumpster-text {
  background-color: #0060f2;
}

#red .dumpster-text {
  background-color: red;
}

.label {
  display: flex;
  justify-content: center;
}

.dumpster-text {
  border-radius: 40px;
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 100%;
  letter-spacing: 0.2px;
  text-align: center;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 3vh;
  width: max-content;
}

.dumpster-garbage {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.counter {
  opacity: 0;
  display: flex;
  width: 500px;
  justify-content: space-between;
  transition: all 350ms ease-in;
}

.counter.active {
  opacity: 1;
}

.win span,
.lose span {
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
}
</style>
