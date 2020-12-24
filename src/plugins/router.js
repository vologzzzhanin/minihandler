import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'
import Login from '@/views/Login'

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/logout', name: 'logout', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/app', name: 'app', component: Main },
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
