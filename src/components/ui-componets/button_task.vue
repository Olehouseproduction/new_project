<script setup>
import { ref } from "vue";
const props = defineProps({
    name: String
})
const count = ref(0);
</script>

<template>
    <div class="button-task">   
        <span>
            {{ props.name }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/mixin.scss";
    .button-task{
        padding: 24px;
        max-width: 120px;
        min-height: 100px;
        background-color: darkgreen;
        border-radius: 12px;
        transform: scale(1);
        transition: all 350ms ease-in;
        color: aliceblue;
        @include flex (center, center);
        span{
            text-align: center;
        }
        &:hover{
            animation: pulse 1.7s infinite;
        }
    }
    @keyframes pulse {
        0%   {transform: scale(1); background-color: darkgreen;}
        50%  {transform: scale(1.2); background-color: darkcyan;}
        100% {transform: scale(1); background-color: darkgreen;}
    }
</style>
