import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';

Vue.use(VueRouter)

export default new VueRouter({
  mode:"history",
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
