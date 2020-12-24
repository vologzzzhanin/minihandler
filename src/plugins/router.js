import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App.vue'
import Login from '@/Login.vue'

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/app', component: App },
  // { path: '/logout', component: Logout },
]

const router = new Router({
  routes
})

export default router
