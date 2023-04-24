import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import router from './routes/index'


const app =createApp(App)

app.use(router)

app.mount('#app')
