import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    class: {
      className: null,
      attributes: [],
      template: null,
    }
  },
  mutations: {
    SET_CLASS(state, {entityName}) {
      state.class.className = entityName
    },
    ADD_ATTRIBUTE(state, {entityName}) {
      state.class.attributes.push({
        id: state.class.attributes.length,
        attributeName: entityName,
        beforeValue: '',
        value: '',
        afterValue: ''
      })
    },
  }
})
