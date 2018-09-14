import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/pages/Home'
// import Detail from '@/pages/Detail'

const Home = () => import('@/pages/Home');
const Detail = () => import('@/pages/Detail');

import Promise from 'promise-polyfill'
if (!window.Promise) {
  window.Promise = Promise;
}

Vue.use(VueRouter)

export default new VueRouter({

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
