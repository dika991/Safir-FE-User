import $axios from "../api";

const state = () => ({
  jemaah: {
    id: "",
    id_pemesanan: "",
    id_paket: "",
    nama: "",
    jenis_kelamin: "",
    usia: null,
    dokumen: [],
  },
  listJemaah: [],
});

const mutations = {
  ASSIGN_JEMAAH(state, payload) {
    state.jemaah = {
      nama: payload.nama,
      jenis_kelamin: payload.jenis_kelamin,
      usia: payload.usia,
      dokumen: payload.dokumen,
      id: payload.id,
      id_pemesanan: payload.id_pemesanan,
      id_paket: payload.id_paket,
    };
  },
  ASSIGN_LIST_JEMAAH(state, payload) {
    state.listJemaah = payload;
  },
  CLEAR_FORM(state) {
    state.detailJemaah = {
      id: "",
      id_pemesanan: "",
      id_paket: "",
      nama: "",
      jenis_kelamin: "",
      usia: null,
      dokumen: [],
    };
  },
};

const actions = {
  getJemaah({ commit }, payload) {
    return new Promise((resolve) => {
      $axios.get(`book/${payload}/jemaah`).then((response) => {
        if (response.data.meta.status) {
          commit("ASSIGN_LIST_JEMAAH", response.data.data);
        } else {
          commit("SET_ERRORS", response.data.meta.message);
        }
        resolve(response.data);
      });
    });
  },
  detailJemaah({ commit }, payload) {
    return new Promise((resolve) => {
      $axios
        .get(`book/${payload.idPemesanan}/jemaah/${payload.idJemaah}`)
        .then((response) => {
          if (response.data.meta.status) {
            commit("ASSIGN_JEMAAH", response.data.data);
          } else {
            commit("SET_ERRORS", response.data.meta.message);
          }
          resolve(response.data);
        });
    });
  },
  updateJemaah({ dispatch, commit, state }, payload) {
    return new Promise((resolve) => {
      $axios
        .put(
          `/book/${state.jemaah.id_pemesanan}/jemaah/${state.jemaah.id}`,
          state.jemaah
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
