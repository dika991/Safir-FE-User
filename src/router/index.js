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

import Login from "../views/auth/Login.vue";

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
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })
//Navigation Guards

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
