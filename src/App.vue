<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader/>
    <main class="content">
      <RouterView />
    </main>
    <AppFooter/>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1; /* Permite que el contenido principal crezca */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
