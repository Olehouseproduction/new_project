<script setup>
import { ref } from "vue";
const props = defineProps({
    class: String,
    url: String
})
const count = ref(0);
</script>

<template>
    <img :class="props.class" :src="props.url" alt="">   
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";
.cube{
    @include size(300px, 300px);
    object-fit: contain;
    margin-top: 10px;
}
.vert{
    @include size(600px, fit-content);
    object-fit: contain;
    margin-top: 10px; 
}



</style>