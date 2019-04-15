import Vue from "vue";
import "./plugins/axios";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "@/permission";
import "./mock";
import "vuetify/dist/vuetify.min.css";
import api from "./api";
import '@/styles/index.scss'
Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
