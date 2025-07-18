import $axios from "../api.js";

const state = () => ({});

const mutations = {};

const actions = {
  submit({ commit }, payload) {
    localStorage.setItem("token", null); //RESET LOCAL STORAGE MENJADI NULL
    commit("SET_TOKEN", null, { root: true }); //RESET STATE TOKEN MENJADI NULL
    //KARENA MUTATIONS SET_TOKEN BERADA PADA ROOT STORES, MAKA DITAMBAHKAN PARAMETER
    //{ root: true }

    //KITA MENGGUNAKAN PROMISE AGAR FUNGSI SELANJUTNYA BERJALAN KETIKA FUNGSI INI SELESAI
    return new Promise((resolve, reject) => {
      //MENGIRIM REQUEST KE SERVER DENGAN URI /login
      //DAN PAYLOAD ADALAH DATA YANG DIKIRIMKAN DARI COMPONENT LOGIN.VUE
      $axios
        .post("/login", payload)
        .then((response) => {
          console.log(response);
          //KEMUDIAN JIKA RESPONNYA SUKSES
          if (response.data.meta.status) {
            //MAKA LOCAL STORAGE DAN STATE TOKEN AKAN DISET MENGGUNAKAN
            //API DARI SERVER RESPONSE
            var user = {
              name: response.data.data.name,
              email: response.data.data.email,
            };
            user = JSON.stringify(user);
            localStorage.setItem("token", response.data.data.token);
            commit("SET_TOKEN", response.data.data.token, { root: true });
            localStorage.setItem("user", user);

            commit("SET_USER", user, { root: true });
          } else {
            commit(
              "SET_ERRORS",
              { invalid: "Email/Password Salah" },
              { root: true }
            );
          }
          //JANGAN LUPA UNTUK MELAKUKAN RESOLVE AGAR DIANGGAP SELESAI
          resolve(response.data);
        })
        .catch((error) => {
          if (error.response.status == 422) {
            commit("SET_ERRORS", error.response.data.errors, { root: true });
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
