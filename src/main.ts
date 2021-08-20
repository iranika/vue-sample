import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker.js";
import router from "./router/index";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
