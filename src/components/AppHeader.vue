<template>
    <header class="shadow w-screen">
      <nav class="flex items-center justify-between p-6 w-full bg-gradient-to-r from-teal-200 to-yellow-200">
        <router-link v-if="!isLoginRoute" :to="{ name: 'home' }" class="flex items-center flex-shrink-0 text-black mr-6">
          <AppIcon class="mr-4" icon-name="invoice">
            <IconInvoice :height="20" :width="20" />
          </AppIcon>
          <span class="font-semibold text-xl tracking-tight">Invoice</span>
        </router-link>
        <div v-else class="flex items-center flex-shrink-0 text-black mr-6">
          <AppIcon class="mr-4" icon-name="invoice">
            <IconInvoice :height="20" :width="20" />
          </AppIcon>
          <span class="font-semibold text-xl tracking-tight">Invoice</span>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import AppIcon from './AppIcon.vue';
  import IconInvoice from '../components/icons/IconInvoice.vue';
  
  const route = useRoute();
  
  const isLoginRoute = computed<boolean>(() => {
    return route.name === 'login';
  });
  </script>
  