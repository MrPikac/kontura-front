import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export const store = new Vuex.Store({

      state: {

        logedInUser: null

      },
      getters: {
        getLoggedIn(state) {
            return state.logedInUser;
        }},
      mutations: {

        setLogedInUser(state, logedInUser) {

          state.logedInUser = logedInUser;

        }

      },
      actions: {
        setLogedInUser: ({ commit }, logedInUser) => commit('authenticate', logedInUser)
    }
    })