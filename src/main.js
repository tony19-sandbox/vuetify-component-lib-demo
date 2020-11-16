import Vue from "vue";
import App from "./App.vue";
import { plugin as Vuetify, vuetify } from "./plugins/vuetify";

Vue.use(Vuetify)
Vue.config.productionTip = false;

new Vue({
  vuetify: vuetify(),
  render: h => h(App)
}).$mount("#app");
