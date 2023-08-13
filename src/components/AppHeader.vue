<template>
    <header class="shadow w-screen">
         <nav>
             <nav class="flex items-center justify-between header p-6">
                <router-link v-if="!isLoginRoute" :to="{ name: 'home' }">
                     <div class="flex items-center flex-shrink-0 text-black mr-6">
                         <AppIcon class="mr-4" icon-name="invoice">
                            <IconInvoice :height="20" :width="20"/> 
                         </AppIcon>
                         <span class="font-semibold text-xl tracking-tight ">Invoice</span>
                     </div>
                 </router-link>
                <div v-else>
                     <div class="flex items-center flex-shrink-0 text-black mr-6">
                         <AppIcon class="mr-4" icon-name="invoice">
                            <IconInvoice :height="20" :width="20"/> 
                         </AppIcon>
                         <span class="font-semibold text-xl tracking-tight ">Invoice</span>
                     </div>
                </div>
             </nav>
         </nav>
     </header> 
 </template>
 
 <script setup lang="ts">
import AppIcon from './AppIcon.vue'
import IconInvoice from '../components/icons/IconInvoice.vue'
import { computed } from "vue"
import { useRoute } from 'vue-router';

const route = useRoute();

const isLoginRoute = computed((): boolean => {
  return route.name === 'login'
});

 </script>

<style scoped>
.header {
    width: 100%;
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
}
</style>