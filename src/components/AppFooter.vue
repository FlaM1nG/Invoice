<template>
    <footer class="w-full footer text-black font-xs font-mono font-normal items-center inline-flex justify-center h-10 text-xs">
        Invoice
        Copyright © {{currentYear }} · All Rights Reserved
    </footer> 
 </template>
 
 <script setup lang="ts">
 import { computed } from 'vue';

const date = new Date();
const currentYear = computed(() => date.getFullYear());
 
 </script>

<style scoped>
.footer {
    width: 100%;
    background: #9053c7;;
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
}
</style>