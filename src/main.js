import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router'
import './styles/font.css'
import './styles/index.css'

createApp(App)
.use(VueRouter)
.mount('#app')
