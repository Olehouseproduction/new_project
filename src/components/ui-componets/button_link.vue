<script setup>
import { ref } from "vue";
const props = defineProps({
    url: String,
    name: String,
})
const count = ref(0);
</script>

<template>
    <router-link class="button-rout" :to="props.url">{{ props.name }}</router-link>
    <!-- <router-link class="button-rout" to="/task_1">Задание №1</router-link> -->
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";
    .button-rout{
        padding: 24px;
        background-color: darkgreen;
        color: aliceblue;
        text-decoration: none;
        border-radius: 12px;
        transform: scale(1);
        transition: all 350ms ease-in;
        &:hover{
            transform: scale(1.2);
            background-color: darkcyan;
        }
    }
</style>
