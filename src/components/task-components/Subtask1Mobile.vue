<script setup>
import { ref, onMounted } from "vue"; // импортим хук жизненного цикла

let htmlTest = ref(null);
console.log(htmlTest.value); // тут null так как html еще не создался
onMounted(() => {
  console.log(htmlTest.value); // тут наше значение, так как мы консолим внутри хука, и наш тимплейт уже собрался
});

let bannerTest = ref(null);
console.log(bannerTest.value);
onMounted(() => {
  console.log(bannerTest.value);
});

let allBlocks = ref(null);
console.log(allBlocks.value);
onMounted(() => {
  console.log(allBlocks.value);
});
</script>

<template>
  <section ref="allBlocks" class="blocks_mobile">
    <div class="header name_caption">header</div>
    <div class="menu name_caption">menu</div>
    <div ref="htmlTest" class="hero name_caption">hero</div>
    <div class="main1 name_caption">main</div>
    <div ref="bannerTest" class="banner">banner</div>
    <div class="extra">extra</div>
    <div class="image">image</div>
  </section>
</template>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";

.blocks_mobile {
  display: grid;
  grid-template-columns: 7.5vw;
  grid-template-rows: 4.5vh 4.5vh 12vh 12vh 8vh 8vh 8vh;
  div {
    @include flex(center, center);
  }
}

.header {
  background-color: #17112b;
}

.menu {
  background-color: #ee3c52;
}

.hero {
  background-color: #4c86c6;
}

.main1 {
  background-color: #24344b;
}

.image {
  background-color: #c1e4e6;
}

.extra {
  background-color: #4dbd97;
}

.banner {
  background-color: #fed269;
}
</style>
