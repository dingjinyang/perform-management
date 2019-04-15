export default [{
    path: '/personalperformance',
    component: () => import('@/components/Layout'),
    meta: {
        text: '个人业绩填报',
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down"
    },
    model: false,
    hideInMenu: false,
    children: [{
        path: "stupaper",
        name: "Student",
        component: () => import("@/views/scientific/StudentPaper"),
        meta: {
            text: "校级优秀毕业设计论文",
            icon: "content_copy"
        }
    }]
}]