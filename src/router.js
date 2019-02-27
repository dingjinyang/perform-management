import Vue from "vue";
import Router from "vue-router";
import Layout from "./components/Layout.vue";

Vue.use(Router);

export const constantRouterMap = [
  {
    path: "/",
    name: "home",
    component: Layout
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/Login.vue")
  }
];

export const asyncRouterMap = [
  {
    path: "/example",
    component: Layout,
    name: "Example",
    meta: { title: "Example", icon: "el-icon-menu" },
    children: [
      {
        path: "gag",
        name: "Table",
        component: () => import("./views/Example"),
        meta: { title: "Table", icon: "el-icon-tickets" }
      }
    ]
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});
