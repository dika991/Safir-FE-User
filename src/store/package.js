import $axios from "../api.js";

const state = () => ({
  totalList: [],
  recentlyList: [],
  detailList: {
    uid: 0,
    code: "",
    name: "",
    desc: "",
    season: "",
    total_days: 0,
    start_date: "",
    end_date: "",
    hotel: {},
    airlines: {},
    types: [],
    status: "",
    photos: [],
  },
  page: 1,
});

const mutations = {
  ASSIGN_LIST(state, payload) {
    state.totalList = payload;
  },
  ASSIGN_RECENT_LIST(state, payload) {
    state.recentlyList = payload;
  },
  SET_PAGE(state, payload) {
    state.page = payload;
  },
  ASSIGN_DETAIL(state, payload) {
    state.detailList = {
      uid: payload.uid,
      code: payload.code,
      name: payload.name,
      desc: payload.desc,
      season: payload.season,
      total_days: payload.total_days,
      start_date: payload.start_date,
      end_date: payload.end_date,
      hotel: payload.hotel,
      airlines: payload.airlines,
      types: payload.types,
      status: payload.status,
      photos: payload.photos,
      hotels: payload.hotels,
      airlines: payload.airlines,
    };
  },
  CLEAR_FORM(state) {
    state.detailList = {
      uid: 0,
      code: "",
      season: "",
      total_days: 0,
      start_date: "",
      end_date: "",
      hotel: {},
      airlines: {},
      types: [],
      status: "",
    };
  },
};

const actions = {
  getListPackage({ commit }, payload) {
    return new Promise((resolve) => {
      $axios
        .get(`/packages`)
        .then((response) => {
          commit("ASSIGN_LIST", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    });
  },
  getRecentPackage({ commit }, payload) {
    return new Promise((resolve) => {
      $axios
        .get(`/recent_package`)
        .then((response) => {
          commit("ASSIGN_RECENT_LIST", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  detailPackage({ commit }, payload) {
    return new Promise((resolve) => {
      $axios.get(`/package/${payload}`).then((response) => {
        commit("ASSIGN_DETAIL", response.data.data);
        resolve(response.data);
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
