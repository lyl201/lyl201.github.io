import Vue from 'vue'
import VueRouter from 'vue-router'
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
