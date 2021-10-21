import $axios from "../api";

const state = () => ({
  pemesanan: {
    detail: [],
    pemesanan: {},
    transaksi: {},
  },
  detail: {
    nama: "",
    email: "",
    no_hp: "",
    status: "",
    transaksi: {},
    tagihan: [],
    detail: {},
  },
});

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.pemesanan = {
      detail: payload.detail,
      pemesanan: payload.pemesanan,
      transaksi: payload.transaksi,
    };
  },
  ASSIGN_DETAIL(state, payload) {
    state.detail = {
      nama: payload.nama,
      email: payload.email,
      no_hp: payload.no_hp,
      status: payload.status,
      detail: payload.detail,
      transaksi: payload.transaksi,
      tagihan: payload.tagihan,
    };
  },
  CLEAR_FORM(state) {
    state.pemesanan = {
      detail: [],
      pemesanan: {},
      transaksi: {},
    };
  },
};

const actions = {
  postPemesanan({ dispatch, commit, state }, payload) {
    return new Promise((resolve) => {
      $axios
        .post("/book", payload)
        .then((response) => {
          if (response.data.meta.status) {
            commit("ASSIGN_DATA", response.data.data);
          } else {
            commit("SET_ERRORS", error.response.data.meta.message),
              { root: true };
          }

          resolve(response.data.data.pemesanan.code);
        })
        .catch((error) => {
          console.log(error.response.data)
          if (!error.response.meta.status) {
            commit("SET_ERRORS", error.response.data.meta.message),
              {
                root: true,
              };
          }
        });
    });
  },
  getDetailPemesanan({ commit }, payload) {
    return new Promise((resolve) => {
      $axios.get(`/book/${payload}/detail`).then((response) => {
        if (response.data.meta.status) {
          commit("ASSIGN_DETAIL", response.data.data);
          console.log(response.data.data)
        }

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
