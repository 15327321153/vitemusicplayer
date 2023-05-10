import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import router from './routes/index'
import 'animate.css';
import { createPinia } from 'pinia';

const app =createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)


app.mount('#app')
