import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '527834657408-d601vc5ocn6kq6mc87pt56o9dm0eb219.apps.googleusercontent.com'
  })

app.mount('#app')
