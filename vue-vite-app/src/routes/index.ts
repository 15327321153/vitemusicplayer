import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/home/index.vue'
import Top from '../view/top/index.vue'
import Mv from '../view/mv/index.vue'
import My from '../view/my/index.vue'
import Offer from '../view/offer/index.vue'


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

    ],
  })


export default router