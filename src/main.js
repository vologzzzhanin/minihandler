import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import vuetify from './plugins/vuetify'
import store from './plugins/store'
import App from './App.vue'

Vue.config.productionTip = false

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

Vue.use(Vuex)

new Vue({
  axios,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
