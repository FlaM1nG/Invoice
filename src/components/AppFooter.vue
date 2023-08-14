<template>
    <footer class="w-full text-black font-mono font-normal items-center inline-flex justify-center h-10 text-xs bg-gradient-to-r from-teal-200 to-yellow-200">
      {{ $t('invoice') }}
        Copyright © {{currentYear }} ·{{ $t('footer.reserved') }}
    </footer> 
 </template>
 
<script setup lang="ts">
import { computed } from 'vue';

const date = new Date();

const currentYear = computed<number>(() => {
  return date.getFullYear();
});

</script>