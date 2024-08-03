import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import pinia9 from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(pinia9)
app.use(pinia)
app.use(router)

app.mount('#app')
