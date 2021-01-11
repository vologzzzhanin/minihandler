import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import router from './router'

Vue.use(Vuex)

const getDefaultClass = () => {
  return {
    classId: '',
    data: {
      className: '',
      attributes: []
    }
  }
}

const state = {
  class: getDefaultClass(),
  classList: [],
  isAuthenticated: localStorage.getItem('isAuthenticated') || 'false',
  loginMassage: ''
}

const mutations = {
  SET_IS_AUTHENTICATED(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  SET_LOGIN_MESSAGE(state, loginMassage) {
    state.loginMassage = loginMassage
  },
  SET_CLASS_LIST(state, classList) {
    state.classList = classList
  },
  EDIT_CLASS_NAME(state, className) {
    state.class.data.className = className
  },
  ADD_ATTRIBUTE(state, attributeName) {
    state.class.data.attributes.push({
      attributeName: attributeName,
      beforeValue: '',
      value: '',
      afterValue: ''
    })
  },
  EDIT_ATTRIBUTE(state, { fieldName, index, value }) {
    state.class.data.attributes[index][fieldName] = value
  },
  SET_CLASS(state, { classId, classData }) {
    state.class.classId = classId
    state.class.data = classData
  },
  RESET_CLASS(state) {
    Object.assign(state.class, getDefaultClass())
  }
}

const actions = {
  setIsAuthenticated({ commit }, isAuthenticated) {
    commit('SET_IS_AUTHENTICATED', isAuthenticated)
  },
  login({ commit, dispatch }, { email, password }) {
    axios
      .post('/api/v1/login', { email, password })
      .then(response => {
        localStorage.setItem('isAuthenticated', 'true')
        dispatch('setIsAuthenticated', 'true')

        commit('SET_LOGIN_MESSAGE', response.data.message)

        router.push('home')
      })
      .catch(error => {
        if (error.response) {
          commit('SET_LOGIN_MESSAGE', error.response.data.message)
        } else {
          commit('SET_LOGIN_MESSAGE', error)
        }
      })
  },
  logout({ dispatch }) {
    axios
      .post('/api/v1/logout')
      .then(() => {
        localStorage.setItem('isAuthenticated', 'false')
        dispatch('setIsAuthenticated', 'false')

        router.push('logout')
      })
      .catch(error => {
        console.log(error)
      })
  },
  getClassList({ commit }) {
    axios
      .get('/api/v1/get_class_list')
      .then(response => {
        commit('SET_CLASS_LIST', response.data.class_list)
      })
      .catch(e => {
        console.log(e)
      })
  },
  setEntity({ commit }, { entitySetting, entityName }) {
    commit(entitySetting, entityName)
  },
  editAttribute({ commit }, { fieldName, index, value }) {
    commit('EDIT_ATTRIBUTE', { fieldName, index, value })
  },
  saveClass({ commit, dispatch }) {
    axios
      .post('/api/v1/save_class', {
        id: state.class.classId,
        data: state.class.data
      })
      .then(response => {
        let classId = response.data.class_id
        let classData = response.data.class_data
        commit('SET_CLASS', { classId, classData })
        dispatch('getClassList')
      })
      .catch(e => {
        console.log(e)
      })
  },
  selectClass({ commit }, id) {
    let cls = state.classList.find(x => x.id === id)
    commit('SET_CLASS', {
      classId: id,
      classData: cls.data
    })
  },
  deleteClass({ dispatch }, id) {
    axios
      .post('/api/v1/delete_class', id)
      .then(() => {
        dispatch('getClassList')
      })
      .catch(e => {
        console.log(e)
      })
  },
  resetClass({ commit }) {
    commit('RESET_CLASS')
  }
}

const getters = {
  showClass: state => {
    return state.class.data.className.length > 0
  },
  showAttributes: state => {
    return state.class.data.attributes.length > 0
  }
}

export default new Vuex.Store({
  state,
  strict: true,
  mutations,
  actions,
  getters
})
