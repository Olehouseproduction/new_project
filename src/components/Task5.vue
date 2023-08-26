<script setup>
import Header from "./ui-components/Header.vue";
// // оптимизация
// // конфиг переменных которые используются для работы приложения
// let trashListFresh = [
//   { type: "household", url: "image/garbage/apple.png" },
//   { type: "dangerous", url: "image/garbage/battery.png" },
//   { type: "recyclables", url: "image/garbage/glass.png" },
//   { type: "recyclables", url: "image/garbage/paper.png" },
//   { type: "mixed", url: "image/garbage/boots.png" },
//   { type: "mixed", url: "image/garbage/cottonBuds.png" },
//   { type: "mixed", url: "image/garbage/glue.png" },
//   { type: "recyclables", url: "image/garbage/milkCarton.png" },
//   { type: "recyclables", url: "image/garbage/tin.png" },
//   { type: "mixed", url: "image/garbage/tube.png" },
//   { type: "mixed", url: "image/garbage/patch.png" },
// ];

// let elemImg = document.createElement("img");
// elemImg.classList.add("go-js");
// let winPoint = 0;
// let losePoint = 0;
// let upPoint = document.querySelector(".win-js");
// let downPoint = document.querySelector(".lose-js");
// let yes = document.querySelector(".win");
// let no = document.querySelector(".lose");
// let headline = document.querySelector(".caption");
// let trashPicture = document.querySelector(".trash_picture");
// let start = document.querySelector(".button_begin");
// let dumpster = document.querySelectorAll(".dumpster");
// let trashList;
// let trash;

// function startGame() {
//   // обнуляем при каждом старте счетчики
//   winPoint = 0;
//   losePoint = 0;
//   upPoint.innerHTML = winPoint;
//   downPoint.innerHTML = losePoint;
//   // Выводим условие задачи для пользователя
//   headline.innerHTML = "Выбери правильный бак для сортировки мусора"; //Посмотреть как переделать Олеся
//   trashList = trashListFresh.slice(0);
//   // начинаем игровой цикл
//   let rand = Math.floor(Math.random() * trashList.length);
//   elemImg.setAttribute("src", trashList[rand].url);
//   elemImg.setAttribute("data-type", trashList[rand].type);
//   trashPicture.appendChild(elemImg);
//   trash = document.querySelector(".trash_picture img");
//   console.log("ghbdtn");
//   trashList.splice(rand, 1);
//   getStarted();
// }
// function getStarted() {
//   let endGameElem = document.querySelectorAll(".end-game--js");
//   endGameElem.forEach((item) => {
//     item.classList.remove("end");
//   });
//   let starting = document.querySelectorAll(".go-js");
//   starting.forEach((item) => {
//     item.classList.toggle("active");
//   });
//   start.classList.add("active");
//   dumpster.forEach((item) => {
//     item.classList.remove("end");
//   });
// }

// function clickBug(type) {
//   key = trash.getAttribute("data-type");
//   if (type === key && trashList.length > 0) {
//     winPoint++;
//     upPoint.innerHTML = winPoint;
//     colorPoints(true);
//   }
//   if (type != key && trashList.length > 0) {
//     losePoint++;
//     downPoint.innerHTML = losePoint;
//     colorPoints(false);
//   }
//   if (trashList.length === 0) {
//     gameOver();
//   }
//   gameLoop();
// }

// function gameLoop() {
//   if (trashList.length >= 1) {
//     let rand = Math.floor(Math.random() * trashList.length);
//     elemImg.setAttribute("src", trashList[rand].url);
//     elemImg.setAttribute("data-type", trashList[rand].type);
//     trashPicture.appendChild(elemImg);
//     trashList.splice(rand, 1);
//   }
// }

// function colorPoints(boolean) {
//   let button = document.querySelector(".containers");

//   button.addEventListener("click", () => {
//     button.classList.toggle("active");
//     setTimeout(() => button.classList.add("active"), 0);
//   });

//   if (boolean) {
//     yes.classList.add("active");
//     no.classList.remove("active");
//   } else {
//     no.classList.add("active");
//     yes.classList.remove("active");
//   }
// }

// function gameOver() {
//   getStarted();
//   headline.innerHTML =
//     "Отлично! Количество набранных очков: " +
//     winPoint +
//     " из " +
//     trashListFresh.length +
//     "!";
//   let endGameElem = document.querySelectorAll(".end-game--js");
//   endGameElem.forEach((item) => {
//     item.classList.add("end");
//   });
// }
</script>

<template>
  <div class="main">
    <Header name="Game" />
    <div class="workspace--task5">
      <div class="wrapper">
        <header @click="openBox()" class="caption intro-js">
          Выбери правильный бак для сортировки мусора
        </header>
        <section class="panel">
          <button @click="startGame()" class="button_begin intro-js">
            Начать!
          </button>
          <!-- <div class="cub-svg go-js">
          <svg viewBox="-40 -40 250.79 250.79" class="timer-svg">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <circle
                  class="cls-1 js-preload-circle"
                  cx="85.89"
                  cy="85.89"
                  r="84.89"
                  style="stroke-dashoffset: 600" />
                <circle
                  class="cls-1"
                  cx="85.89"
                  cy="85.89"
                  r="84.89"
                  stroke-opacity="0.55" />
              </g>
            </g>
          </svg>
        </div> -->
          <div class="trash_picture go-js"></div>
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
          <div class="again end-game--js">
            <img src="../assets/image/game/reload.png" alt="arrow_clockwise" />
            <button @click="startGame()" class="button_again">Ещё раз</button>
          </div>
        </section>
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
                src="../assets/image/game/buck_top/wastebox_yellow.png"
                alt="wastebox_yellow" />
              <img
                class="dumpster-cap"
                src="../assets/image/game/buck_top/wastetop_yellow.png"
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
                src="../assets/image/game/buck_top/wastebox_green.png"
                alt="wastebox_green" />
              <img
                class="dumpster-cap"
                src="../assets/image/game/buck_top/wastetop_green.png"
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
                src="../assets/image/game/buck_top/wastebox_blue.png"
                alt="wastebox_blue" />
              <img
                class="dumpster-cap"
                src="../assets/image/game/buck_top/wastetop_blue.png"
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
                src="../assets/image/game/buck_top/wastebox_red.png"
                alt="wastebox_red" />
              <img
                class="dumpster-cap"
                src="../assets/image/game/buck_top/wastetop_red.png"
                alt="wastetop_red" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixin.scss";
.workspace--task5 {
  display: flex;
  // font-family: "Roboto";
  background: url("../assets/image/game/recycling-concept-top-view.jpg") 50%
    100%/100% auto no-repeat;
  box-sizing: border-box;
  max-height: 85%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  // background-image: url("../assets/image/game/recycling-concept-top-view.jpg");
  // background-position: 50% 100%;
  // background-size: 100% auto;
  // background-repeat: no-repeat;
  @include size(82%, 82%);
}

.wrapper {
  max-width: 65%;
  margin-top: 10vh;
}

.containers {
  padding-top: 3vh;
  display: flex;
  justify-content: space-evenly;
}

.dumpster-text {
  margin: 50px auto;
}

.panel {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 28vh;
}

.caption {
  font-size: 2em;
  font-weight: bolder;
  text-align: center;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 5vh;
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

.win,
.lose,
.again {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 40px;
  padding: 10px;
  text-align: center;
  height: 30px;
  transition: all 350ms ease-in;
  box-shadow: 0 5px 0 #5d593a;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
}

.win,
.lose {
  width: 80px;
}

.dumpster-garbage {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.timer-svg {
  width: 350px;
  object-fit: contain;
}

.cub-svg {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 0;
  z-index: 4;
  width: 200px;
}

.trash_picture {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  width: 200px;
  height: 200px;
  border-radius: 100px;
  background: #c3deee;
  z-index: 3;
  opacity: 0;
  transform: scale(1);
  transition: all 350ms ease-in;
}

.trash_picture.active {
  opacity: 1;
  transform: scale(1.3);
}

.trash_picture img {
  width: 145px;
  z-index: 3;
  opacity: 0;
  transform: scale(1);
}

.trash_picture img.active {
  opacity: 1;
  transform: scale(1.2);
  animation: appearance 350ms cubic-bezier(0.1, -0.6, 0.2, 0);
}
.dumpster.end {
  pointer-events: none;
}

@keyframes appearance {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.lose img,
.win img {
  max-width: 100%;
  max-height: 100%;
}

.win {
  background-color: #a7d161;
}

.lose {
  background-color: #e5017c;
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

.button_begin {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 5;
  color: white;
  cursor: pointer;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  font-size: 2rem;
  width: 200px;
  height: 200px;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 100px;
  border: 5px;
  background-image: linear-gradient(
    45deg,
    #e6a8d7 0%,
    #cd00cd 50%,
    #660066 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: margin-left 4s 1s;
}
.button_begin:hover {
  box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
  background-position: 0 0;
  outline: solid 5px;
}

.button_begin.active {
  display: none;
}

.dumpster-text {
  box-shadow: 0 3px 0 #5d593a;
}

.again {
  background-color: #d3a8f0;
  cursor: pointer;
  display: none;
}

.button_again {
  color: white;
  font-weight: bold;
  font-size: 2rem;
  outline: none;
  border: none;
  background-color: #d3a8f0;
  transition: all 350ms ease-in;
  cursor: pointer;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
}

.again.end {
  display: flex;
  z-index: 6;
  transition: all 350ms ease-in;
  margin-top: 17vh;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  from {
    transform: scale(0.85);
  }
  50% {
    transform: scale(1);
  }
  to {
    transform: scale(0.85);
  }
}

.cub-svg.active {
  opacity: 0;
}

.counter.end {
  opacity: 1;
  width: 12vw;
  transition: all 350ms ease-in;
  position: absolute;
  gap: 1vw;
}

.win.active {
  animation: zoom 1s ease-in-out 1;
}

.lose.active {
  animation: zoom 1s ease-in-out 1;
}

@keyframes zoom {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
