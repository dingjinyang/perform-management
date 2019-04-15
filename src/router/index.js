import Vue from "vue";
import Router from "vue-router";

import constRouter from './common'
import asycnRouter from './modules'

Vue.use(Router);


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: asycnRouter.concat(constRouter)
});
