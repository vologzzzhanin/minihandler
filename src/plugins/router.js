import Vue from 'vue'
import Router from 'vue-router'
import store from '@/plugins/store'

import Main from '@/views/Main'
import Login from '@/views/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/logout',
      name: 'logout',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/app',
      name: 'app',
      component: Main
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.isAuthenticated) next({ name: 'login' })
  else next()
})

export default router
