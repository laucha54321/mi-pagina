import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(store).use(router).use(MotionPlugin).mount('#app')
