import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import vuetify from './plugins/vuetify'
import store from './plugins/store'
import router from './plugins/router'
import App from './App.vue'
import { defaultFilter, localeFilter } from './filters/dateFilters'
import DefaultLayout from './layouts/DefaultLayout'
import EmptyLayout from './layouts/EmptyLayout'

Vue.config.productionTip = false

Vue.filter('date', defaultFilter)
Vue.filter('localeDate', localeFilter)

Vue.component('default-layout', DefaultLayout)
Vue.component('empty-layout', EmptyLayout)

Vue.use(Vuex)

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

new Vue({
  router,
  axios,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
