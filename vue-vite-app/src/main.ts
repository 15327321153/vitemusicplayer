import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import router from './routes/index'
import 'animate.css';
import { createPinia } from 'pinia';


import VideoPlayer from 'vue-video-player'

// 引入样式文件
import 'video.js/dist/video-js.css'



const app =createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.use(VideoPlayer)

app.mount('#app')
