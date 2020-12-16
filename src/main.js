import Vue from 'vue'
import Vuex from 'vuex'

import vuetify from './plugins/vuetify'
import store from './plugins/store'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
