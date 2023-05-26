import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/home/index.vue'
import Top from '../view/top/index.vue'
import Mv from '../view/mv/index.vue'
import My from '../view/my/index.vue'
import Offer from '../view/offer/index.vue'
import Offers from '../view/offers/index.vue'
import video from '../view/video/index.vue'
import Song from '../view/video/index.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/top',
        name: 'Top',
        component: Top,
      },
      {
        path: '/mv',
        name: 'Mv',
        component: Mv,
      },
      {
        path: '/my',
        name: 'My',
        component: My,
      },
      {
        path: '/offer',
        name: 'Offer',
        component: Offer,
      },
      {
        path: '/offers/:id',
        name: 'Offers',
        component: Offers,
        props:true
      },
      {
        path: '/video/:mvid',
        name: 'Video',
        component: video,
        props:true
      },
      {
        path: '/song/:songid',
        name: 'Song',
        component: Song,
        props:true
      },


    ],
  })


export default router