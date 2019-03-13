import Vue from "vue";
import Router from "vue-router";
import Layout from "./components/Layout.vue";

Vue.use(Router);

/**
 * model: list-group 是否自动展开
 */
export const constantRouterMap = [
  {
    path: "/login",
    name: "login",
    hideInMenu: true,
    component: () => import("./views/Login.vue")
  },
  { path: "/404", component: () => import("./views/404"), hideInMenu: true },
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    name: "Dashboard",
    hideInMenu: true,
    // meta: { text: "首页", icon: "home" },
    children: [
      {
        path: "dashboard",
        component: () => import("./views/Dashboard")
      }
    ]
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
        path: "stupaper",
        name: "Paper",
        component: () => import("./views/scientific/StudentPaper"),
        meta: { text: "校级优秀毕业设计论文", icon: "content_copy" }
      },
      {
        path: "teapaper",
        name: "Paper",
        component: () => import("./views/scientific/TeacherPaper"),
        meta: { text: "教学改革科研论文", icon: "content_copy" }
      }
    ]
  },
  {
    component: Layout,
    path: "/",
    name: "Personal",
    hideInMenu: true,
    children: [
      {
        path: "/personal",
        component: () => import("./views/Personal")
      }
    ]
  },
  { path: "*", redirect: "/404", hideInMenu: true }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});
