/**
 * model: list-group 是否自动展开
 */
export default [{
    path: "/login",
    name: "login",
    hideInMenu: true,
    component: () => import("@/views/Login.vue")
}, {
    path: "/404",
    component: () => import("@/views/404"),
    hideInMenu: true
}, {
    path: "/",
    component: () => import('@/components/Layout'),
    redirect: "dashboard",
    name: "Dashboard",
    hideInMenu: true,
    // meta: { text: "首页", icon: "home" },
    children: [{
        path: "dashboard",
        component: () => import("@/views/Dashboard")
    }]
}, {
    path: "*",
    redirect: "/404",
    hideInMenu: true
}];