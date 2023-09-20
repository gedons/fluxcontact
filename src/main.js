import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import 'vue-toast-notification/dist/theme-default.css'; 
import VueToast from 'vue-toast-notification';

const app = createApp(App)

app.use(router,VueToast)

app.mount('#app')

