import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
import List from './views/list.vue'
import Detail from './views/detail.vue'
import Cart from './views/cart.vue'
import User from './views/user.vue'
import Zhuangti from './views/zhuangti.vue'
import Fenlei from './views/fenlei.vue'
import Pinpai from './views/pinpai.vue'
import PinpaiList from './views/pinpaiList.vue'
import Notfind from './views/notfind.vue'
import Registered from './views/registered.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/list/:id',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/zhuangti',
      name: 'zhuangti',
      component: Zhuangti
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: Fenlei
    },
    {
      path: '/pinpaiList/pinpai/:id',
      name: 'pinpai',
      component: Pinpai
    },
    {
      path: '/pinpaiList',
      name: 'pinpaiList',
      component: PinpaiList
    },
    {
      path: '/notfind',
      name: 'notfind',
      component: Notfind
    },
    {
      path: '/registered',
      name: 'registered',
      component:Registered
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
