export default [{
    path: '/thesis',
    component: () => import('@/components/Layout'),
    meta: {
        text: '论文',
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down"
    },
    model: false,
    hideInMenu: false,
    children: [{
        path: 'thesisStandard',
        name: 'thesisStandard',
        component: () => import('@/views/thesis/ThesisStandard'),
        meta: {
            text: "论文标准",
            icon: "content_copy"
        },
    }, {
        path: 'ThesisCoefTable',
        name: 'ThesisCoefTable',
        component: () => import('@/views/thesis/ThesisCoefTable'),
        meta: {
            text: "论文系数表",
            icon: "content_copy"
        },
    }]
}]