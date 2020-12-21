import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    class: {
      className: null,
      attributes: []
    }
  }
}

const state = getDefaultState()

const mutations = {
  SET_CLASS(state, {name}) {
    state.class.className = name
  },
  ADD_ATTRIBUTE(state, {name}) {
    state.class.attributes.push({
      attributeName: name,
      beforeValue: '',
      value: '',
      afterValue: ''
    })
  },
  EDIT_ATTRIBUTE(state, {name, i, value}) {
    state.class.attributes[i][name] = value
  },
  SET_STATE(state, {newState}) {
    console.log(newState)
    state = newState
    // Object.assign(state, newState)
  },
  RESET_STATE(state) {
    Object.assign(state, getDefaultState())
  }
}

export default new Vuex.Store({
  state,
  strict: true,
  mutations
})
