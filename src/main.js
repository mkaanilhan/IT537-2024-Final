import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import './assets/tailwind.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App).use(store).use(router).use(Toast).mount('#app')
