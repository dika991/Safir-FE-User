import $axios from "../api";

const state = () => ({
  dokumen: {
    id: null,
    jenis: "",
    url: "",
    id_jemaah: null,
  },
  listDokumen: [],
});

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.dokumen = {
      id: payload.id,
      jenis: payload.jenis,
      url: payload.url,
      id_jemaah: payload.id_jemaah,
    };
  },
  ASSIGN_LIST_DATA(state, payload) {
    state.listDokumen = payload;
  },
  CLEAR_DATA(state) {
    state.dokumen = {
      id: null,
      jenis: "",
      url: "",
      id_jemaah: null,
    };
  },
};

const actions = {
  getDokumen({ commit }, payload) {
    return new Promise((resolve) => {
      $axios
        .get(`/book/${payload.code}/jemaah/${payload.idJemaah}/dokumen`)
        .then((response) => {
          if (response.data.meta.status) {
            commit("ASSIGN_LIST_DATA", response.data.data);
          } else {
            commit("SET_ERRORS", response.data.meta.message);
          }
          resolve(response.data);
        });
    });
  },
  postUploadDokumen({ dispatch, commit, state }, payload) {
    return new Promise((resolve) => {
      $axios
        .post(
          `/book/${payload.code}/jemaah/${payload.idJemaah}/dokumen`,
          state.dokumen
        )
        .then((response) => {
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
