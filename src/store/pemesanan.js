import $axios from "../api";

const state = () => ({
  pemesanan: {
    detail: [],
    pemesanan: {},
    transaksi: {},
  },
  listPemesanan: [],
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
      created_at: payload.created_at,
      nama: payload.nama,
      email: payload.email,
      no_hp: payload.no_hp,
      status: payload.status,
      detail: payload.detail,
      transaksi: payload.transaksi,
      tagihan: payload.tagihan,
      code : payload.code,
    };
  },
  ASSIGN_LIST(state, payload) {
    state.listPemesanan = payload;
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
      $axios
        .get(`/book/${payload}/detail`)
        .then((response) => {
          console.log(response);
          if (response.data.meta.status) {
            commit("ASSIGN_DETAIL", response.data.data);
          } else {
            commit("SET_ERRORS", response.data.meta.message);
          }

          resolve(response.data);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            resolve(error.response.data);
          }
        });
    });
  },
  getListPemesanan({ commit }, payload) {
    return new Promise((resolve) => {
      $axios
        .get(`/book/`)
        .then((response) => {
          console.log(response);
          if (response.data.meta.status) {
            commit("ASSIGN_LIST", response.data.data);
          } else {
            commit("SET_ERRORS", response.data.meta.message);
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            resolve(error.response.data);
          }
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
