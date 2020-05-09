import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    mensaje(state) {
      return "Welcome to Your Vue.js App";
    },
    estaLogeado(state) {
      return false;
    },
  },
});
