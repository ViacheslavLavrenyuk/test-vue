import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    jsonUsers: '',
    userId: null
  },
  getters: {
    users (state) {
      return state.users
    }
  },

  mutations: {
    userDelete (state, id) {
      state.users = state.users.filter(user => user.id !== id)
    }
  }
})
