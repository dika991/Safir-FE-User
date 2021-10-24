import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";
// import Home from '../views/Home.vue'
import Index from "../views/Index.vue";
import Home from "../views/Home.vue";

import DetailPaket from "../views/paket/DetailPaket.vue";
import TipePaket from "../views/paket/PaketTypes.vue";
import ListPaket from "../views/paket/ListPaket.vue";

import DetailPemesanan from "../views/pemesanan/DetailPemesanan";
import CekPemesanan from "../views/pemesanan/CekPemesanan.vue";
import CekDetailPemesanan from "../views/pemesanan/CekDetailPemesanan";

import Login from "../views/auth/Login.vue";

import IndexUser from "../views/user/Index.vue"
import UserDashboard from "../views/user/UserDashboard.vue"
import UserPemesanan from "../views/user/UserPemesanan.vue"
import UserDetailPemesanan from "../views/user/DetailPemesananUser.vue"

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Index,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        },
        {
          path: "listPaket",
          name : "List Paket",
          component: ListPaket
        },
        {
          path: "cekPemesanan",
          name : "Cek Pemesanan",
          component: CekPemesanan
        },
        {
          path: "paket/:code",
          name: "Detail Paket",
          component: DetailPaket,
        }, 
        {
          path: "paket/:code/types",
          meta: {
            requiresAuth: true,
          },
          name: "Daftar Tipe Paket",
          component: TipePaket,
        },
        {
          path: "pemesanan/:code",
          meta: {
            requiresAuth: true,
          },
          name: "Detail Pemesanan",
          component: DetailPemesanan,
        },
      ],
    },
    {
      path: "/cekPemesanan/:code",
      name : "Cek Detail Pemesanan",
      component: CekDetailPemesanan
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/user",
      component: IndexUser,
      meta:{
        requiresAuth: true,
      },
      children: [
        {
          path: "",
          name: "Dashboard",
          component: UserDashboard,
        },
        {
          path: "pemesanan",
          name : "Pemesanan User",
          component: UserPemesanan
        },
        {
          path: "pemesanan/:code",
          name : "Detail Pemesanan User",
          component : UserDetailPemesanan
        }
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let auth = store.getters.isAuth;
    if (!auth) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
