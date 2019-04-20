import Vue from "vue";
import "@/plugins/axios";
import "@/plugins/vuetify";
import '@/plugins/elemnet'
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import '@/icons';
import "@/permission";
import "@/mock";
import "vuetify/dist/vuetify.min.css";
import api from "@/api";
Vue.prototype.$api = api;
Vue.config.productionTip = false;
import '@/styles/element-variable.scss'
import '@/styles/index.scss'

import waves from './directive/waves/waves'
Vue.directive('waves', waves);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");