import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //data
    Users: [
      { id: 1, name: "라이언", address: "Seoul" },
      { id: 2, name: "어피치", address: "Seoul" },
      { id: 3, name: "네오", address: "Seoul" },
      { id: 4, name: "무지", address: "Seoul" },
    ],
  },
  getters: {
    Users: (state) => {
      return state.Users;
    },
  },
  mutations: {
    addUsers: (state, payload) => {
      state.Users.push(payload);
    },
  },
  actions: {},
  modules: {},
});
