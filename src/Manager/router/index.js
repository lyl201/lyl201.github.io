import Vue from 'vue'
import Router from 'vue-router'
import Catagory from '../pages/Catagory'
import Avator from '../pages/Avator'
import Article from '../pages/Article'
import Comment from '../pages/Comment'
import Detail from '../pages/Detail'

import Promise from 'promise-polyfill'
if (!window.Promise) {
  window.Promise = Promise;
}

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/catagory',
      name: 'Catagory',
      component: Catagory
    },
    {
      path: '/avator',
      name: 'Avator',
      component: Avator
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
