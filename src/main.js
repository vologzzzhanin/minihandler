import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import vuetify from './plugins/vuetify'
import store from './plugins/store'
import App from './App.vue'
import { defaultFilter, localeFilter } from '@/filters/dateFilters'

Vue.config.productionTip = false

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

Vue.use(Vuex)

Vue.filter('date', defaultFilter)
Vue.filter('localeDate', localeFilter)

new Vue({
  axios,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
