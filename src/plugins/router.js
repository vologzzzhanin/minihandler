import Vue from 'vue'
import Router from 'vue-router'
import store from '@/plugins/store'

import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
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
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && store.state.isAuthenticated === 'false') next({ name: 'login' })
  else if (to.name === 'login' && store.state.isAuthenticated === 'true') next({ name: 'home' })
  else next()
})

export default router
