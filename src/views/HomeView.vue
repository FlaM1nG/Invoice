<template>
  <AppButton @custom-click="navigateToInvoice">
    New Invoice
  </AppButton>
</template>
    
<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppButton from '@/components/AppButton.vue';

const router = useRouter();

const navigateToInvoice = (): void => {
  router.push({ name: 'invoice' }); 
};
</script>
