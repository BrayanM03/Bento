import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'
import './assets/style.css'
import './css/dash-styles.css'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
