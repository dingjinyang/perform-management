export default [{
    path: '/personalperformance',
    component: () => import('@/layout/Layout'),
    meta: {
        text: '个人业绩填报',
        icon: "user",
    },
    model: false,
    hideInMenu: false,
    children: [{
        path: "stupaper",
        name: "Student",
        component: () => import("@/views/scientific/StudentPaper"),
        meta: {
            text: "校级优秀毕业设计论文",
            icon: "school"
        },
        children: []
    }, {
        path: 'intellectual',
        component: () => import('@/views/intellectual-property/Index'),
        meta: {
            text: '知识产权',
            icon: "konwlage",
        },
        redirect: {
            path: '/personalperformance/intellectual'
        },
        model: false,
        hideInMenu: false,
        children: [{
            path: 'intellectualProperty',
            name: 'intellectual-property',
            component: () => import('@/views/intellectual-property/intellectualProperty'),
            meta: {
                text: "知识产权",
                icon: "content_copy"
            },
        }, {
            path: 'intellectualPropertyRegular',
            name: 'intellectual-propertyRegular',
            component: () => import('@/views/intellectual-property/IntellectualPropertyStandard'),
            meta: {
                text: "知识产权标准",
                icon: "content_copy"
            },
        }, {
            path: 'regular',
            name: 'intellectualPropertyRegular',
            component: () => import('@/views/intellectual-property/Regular'),
            meta: {
                text: "知识产权规则",
                icon: "content_copy"
            },
        }]
    }, {
        path: 'thesis',
        meta: {
            text: '论文',
            icon: "page",
        },
        component: () => import('@/views/thesis/Index'),
        redirect: {
            path: '/personalperformance/thesis/thesisStandard'
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
}]