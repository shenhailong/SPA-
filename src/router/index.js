import Vue from 'vue'
import Router from 'vue-router'
import Classify from '@/components/Classify'
import Hello from '@/components/Hello'
import indexPage from '@/pages/index'
import Search from '@/pages/search'
import Cart from '@/pages/Cart'
import Me from '@/pages/Me'

Vue.use(Router)

export default new Router({
  routes: [
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
      component: Me
    }
  ]
})
