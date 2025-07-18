import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store/index.js";
import VueSweetalert2 from "vue-sweetalert2";

Vue.config.productionTip = false;
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

Vue.filter("toCurrency", function(value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
