import Vue from 'vue'
import Router from 'vue-router'
import Classify from '@/components/Classify'
import Hello from '@/components/Hello'
import indexPage from '@/pages/index'
import Search from '@/pages/search'
import Cart from '@/pages/Cart'
import Me from '@/pages/me/Me'
// me页面子页面
import Order from '@/pages/me/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: indexPage
    },
    {
      path: '/home',
      name: 'home',
      component: indexPage
    },
    {
      path: '/Classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
      children:[
        {
          path:'order',
          component:Order
        }
      ]
    }
  ]
})
