import Vue from "vue";
import Router from "vue-router";
import Layout from "./components/Layout.vue";

Vue.use(Router);

/**
 * model: list-group 是否自动展开
 */
export const constantRouterMap = [
  { path: "/404", component: () => import("./views/404"), hideInMenu: true },
  {
    path: "/login",
    name: "login",
    hideInMenu: true,
    component: () => import("./views/Login.vue")
  },
  {
    path: "/",
    component: Layout,
    name: "Dashboard",
    hideInMenu: true,
    meta: { text: "首页", icon: "home" },
    children: [
      {
        path: "/dashboard",
        hideInMenu: false,
        meta: { icon: "content_copy", text: "论文" },
        component: () => import("./views/Dashboard")
      }
    ]
  },
  {
    path: "/dashboard",
    meta: { text: "首页", icon: "home" },
    hideInMenu: false
  }
];

export const asyncRouterMap = [
  {
    path: "/scientific",
    component: Layout,
    name: "Scientific",
    meta: {
      text: "科研申报",
      icon: "keyboard_arrow_up",
      "icon-alt": "keyboard_arrow_down"
    },
    model: false,
    hideInMenu: false,
    children: [
      {
        path: "paper",
        name: "Paper",
        component: () => import("./views/scientific/Paper"),
        meta: { text: "论文", icon: "content_copy" }
      }
    ]
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});
