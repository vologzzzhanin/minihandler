import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
  loading: false
}

const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading
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
  getClassList({ commit }) {
    commit('SET_LOADING', true)
    axios
      .get('api/v1/get_class_list')
      .then(response => {
        commit('SET_CLASS_LIST', response.data.class_list)
        commit('SET_LOADING', false)
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
      .post('api/v1/save_class', {
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
      .post('api/v1/delete_class', id)
      .then(response => {
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

export default new Vuex.Store({
  state,
  strict: true,
  mutations,
  actions
})
