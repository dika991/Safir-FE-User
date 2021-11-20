import Vue from "vue";
import Vuex from "vuex";
import paket from "./package.js";
import auth from "./auth.js";
import pemesanan from "./pemesanan.js";
import jemaah from "./jemaah.js";
import dokumen from "./dokumen.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
    errors: [],
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_ERRORS(state, payload) {
      state.errors = payload;
    },
    CLEAR_ERRORS(state) {
      state.errors = [];
    },
  },
  actions: {},
  modules: {
    paket,
    auth,
    pemesanan,
    jemaah,
    dokumen,
  },
  getters: {
    isAuth: (state) => {
      return state.token !== "null" && state.token !== null;
    },
    user: (state) => {
      return state.user;
    },
  },
});

export default store;
