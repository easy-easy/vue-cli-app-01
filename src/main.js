/* eslint-disable no-unused-vars */
import Vue from "vue";
import VuetifyApp from "./VuetifyApp.vue";
import RouteApp from "./RouteApp.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(RouteApp)
}).$mount("#app");
