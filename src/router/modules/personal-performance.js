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
        path: 'longitudinalProject',
        name: 'longitudinalProject',
        component: () => import('@/views/personal-performance/LongitudinalProject'),
        meta: {
            text: '纵向立项',
            icon: 'zongxiang'
        }
    }, {
        path: 'standardPerformanceMeasurement',
        name: 'standardPerformanceMeasurement',
        component: () => import('@/views/personal-performance/StandardPerformanceMeasurement'),
        meta: {
            text: '标准业绩量化',
            icon: 'regular'
        }
    }, {
        path: 'QuantificationOfWorkPerformance',
        name: 'QuantificationOfWorkPerformance',
        component: () => import('@/views/personal-performance/QuantificationOfWorkPerformance'),
        meta: {
            text: '著作业绩量化',
            icon: 'quantification'
        }
    }, {
        path: 'projectConcludingAndAppraise',
        name: 'projectConcludingAndAppraise',
        component: () => import('@/views/personal-performance/ProjectConcludingAndAppraise'),
        meta: {
            text: '项目结题/评价',
            icon: 'over'
        }
    }, {
        path: 'rewordForScientificResearch',
        name: 'rewordForScientificResearch',
        component: () => import('@/views/personal-performance/RewordForScientificResearch'),
        meta: {
            text: '科研奖励',
            icon: 'prize'
        }
    }, {
        path: 'scientificAndSubjectPlatform',
        name: 'scientificAndSubjectPlatform',
        component: () => import('@/views/personal-performance/ScientificAndSubjectPlatform'),
        meta: {
            text: '科研/学科平台',
            icon: 'platform'
        }
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
                text: "知识产权"
            },
        }, {
            path: 'intellectualPropertyRegular',
            name: 'intellectual-propertyRegular',
            component: () => import('@/views/intellectual-property/IntellectualPropertyStandard'),
            meta: {
                text: "知识产权标准"
            },
        }, {
            path: 'regular',
            name: 'intellectualPropertyRegular',
            component: () => import('@/views/intellectual-property/Regular'),
            meta: {
                text: "知识产权规则",
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
            path: 'Thesis',
            name: 'Thesis',
            component: () => import('@/views/thesis/Thesis'),
            meta: {
                text: "论文",
            },
        }, {
            path: 'thesisStandard',
            name: 'thesisStandard',
            component: () => import('@/views/thesis/ThesisStandard'),
            meta: {
                text: "论文标准",
            },
        }, {
            path: 'ThesisCoefTable',
            name: 'ThesisCoefTable',
            component: () => import('@/views/thesis/ThesisCoefTable'),
            meta: {
                text: "论文系数表",
            },
        }]
    }]
}]