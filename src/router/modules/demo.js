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
        path: 'demo',
        name: 'demo',
        component: () => import('@/views/teaching-material'),
        // redirect: {
        //     path: '/demo/'
        // },
        model: false,
        hideInMenu: false,
        meta: {
            text: '教材',
            icon: 'regular'
        },
        children: [{
            path: 'teaching-material-regular',
            name: 'teachingMaterialRegular',
            component: () => import('@/views/teaching-material/Regular'),
            meta: {
                text: '教材标准',
            },
        }, {
            path: 'teaching-material',
            name: 'teachingMaterial',
            component: () => import('@/views/teaching-material/TeachingMaterial'),
            meta: {
                text: '教材',
            },
        }]
    }]
}]