import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import { createI18n } from 'vue-i18n'
import enMessages from '@/locales/en.json';
import esMessages from '@/locales/es.json';

const messages = {
  en: enMessages,
  es: esMessages
};

const i18n = createI18n({
  locale: 'en', // Default language
  messages
});

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
});
app.use(i18n)
app.mount('#app')
