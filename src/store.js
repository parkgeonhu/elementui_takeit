import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	// getters: {
	// 	getToken : function (state) {
	// 		return state.token;
	// 	}
	// },
	// mutations: {
	// setToken : function (state, payload) {
	// 		state.token = payload.token
	// 	}
	// },
	// //
	// state: {
	// 	token : ""
	// },
	state: {
		token: localStorage.getItem('token')
	},
  mutations: {
    getToken (state) {
      state.token = localStorage.getItem('token')
    },
    delToken (state) {
      localStorage.removeItem('token')
      state.token = null
    },
  },
  actions: {

  }
});