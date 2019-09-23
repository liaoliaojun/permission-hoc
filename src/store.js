import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: '',
  },

  mutations: {
    'SET_ROLE': (state, role) => {
      localStorage.setItem('app_role', role)
      state.role = role
    },
  },

  actions: {
    'SET_ROLE': ({commit}, role = '') => {
      commit('SET_ROLE', role)
    }, 
  },

  getters: {
    'GET_ROLE': (state) => {
      return state.role
    },
  },
})
