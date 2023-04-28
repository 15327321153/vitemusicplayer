import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import router from './routes/index'
import 'animate.css';

const app =createApp(App)

app.use(router)

app.mount('#app')
