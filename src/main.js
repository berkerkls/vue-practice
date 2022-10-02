import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import Vuelidate from 'vuelidate'


createApp(App).use(router, Vuelidate).mount('#app')


