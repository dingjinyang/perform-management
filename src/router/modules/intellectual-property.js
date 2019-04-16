export default [{
    path: '/intellectual',
    component: () => import('@/components/Layout'),
    meta: {
        text: '知识产权',
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down"
    },
    model: false,
    hideInMenu: false,
    children: [{
        path: 'intellectual-property',
        name: 'intellectual-property',
        component: () => import('@/views/intellectual-property/IntellectualPropertyStandard'),
        meta: {
            text: "知识产权标准",
            icon: "content_copy"
        },
    }, {
        path: 'regular',
        name: 'regular',
        component: () => import('@/views/intellectual-property/Regular'),
        meta: {
            text: "知识产权规则",
            icon: "content_copy"
        },
    }]
}]