export default [
  {
    path: "/researchAndTeachingMaterials",
    name: "researchAndTeachingMaterials",
    component: () => import("@/layout/Layout"),
    meta: {
      text: "科研和教材",
      icon: "user"
    },
    model: false,
    hideInMenu: false,
    children: [
      {
        path: "propfessionalConstruct",
        name: "professionalConstruct",
        component: () => import("@/views/professional-construction"),
        model: false,
        hideInMenu: false,
        meta: {
          text: "专业建设",
          icon: "regular"
        },
        children: [
          {
            path: "propfessionalConstructregular",
            name: "propfessionalConstructRegular",
            component: () =>
              import("@/views/professional-construction/Regular"),
            meta: {
              text: "专业建设标准"
            }
          },
          {
            path: "propfessionalConstruction",
            name: "propfessionalConstruction",
            component: () =>
              import(
                "@/views/professional-construction/ProfessionalConstruction"
              ),
            meta: {
              text: "专业建设"
            }
          }
        ]
      },
      {
        path: "courseConstruct",
        name: "courseConstruct",
        component: () => import("@/views/teaching-material"),
        model: false,
        hideInMenu: false,
        meta: {
          text: "课程建设",
          icon: "regular"
        },
        children: [
          {
            path: "courseConstructregular",
            name: "courseConstructRegular",
            component: () => import("@/views/course-construction/Regular"),
            meta: {
              text: "课程建设标准"
            }
          },
          {
            path: "courseConstruction",
            name: "courseConstruction",
            component: () =>
              import("@/views/course-construction/CourseConstruction"),
            meta: {
              text: "课程建设"
            }
          }
        ]
      },
      {
        path: "teachingAchievement",
        name: "teachingAchievementAward",
        component: () => import("@/views/teaching-achievement-award"),
        model: false,
        hideInMenu: false,
        meta: {
          text: "教学成果奖",
          icon: "regular"
        },
        children: [
          {
            path: "teachingAchievementAwardRegular",
            name: "teachingAchievementAwardRegular",
            component: () =>
              import("@/views/teaching-achievement-award/Regular"),
            meta: {
              text: "教学成果奖标准"
            }
          },
          {
            path: "teachingAchievementAward",
            name: "teachingAchievementAward",
            component: () =>
              import(
                "@/views/teaching-achievement-award/TeachingAchievementAward"
              ),
            meta: {
              text: "教学成果奖"
            }
          }
        ]
      },
      {
        path: "TeachingPlatform",
        name: "TeachingPlatform",
        component: () => import("@/views/professional-construction"),
        model: false,
        hideInMenu: false,
        meta: {
          text: "教学平台",
          icon: "regular"
        },
        children: [
          {
            path: "teachingPlatformRegular",
            name: "teachingPlatformRegular",
            component: () => import("@/views/teaching-platform/Regular"),
            meta: {
              text: "教学平台标准"
            }
          },
          {
            path: "TeachingPlatform",
            name: "TeachingPlatform",
            component: () =>
              import("@/views/teaching-platform/TeachingPlatform"),
            meta: {
              text: "教学平台"
            }
          }
        ]
      },
      {
        path: "material",
        name: "material",
        component: () => import("@/views/teaching-material"),
        model: false,
        hideInMenu: false,
        meta: {
          text: "教材",
          icon: "regular"
        },
        children: [
          {
            path: "teaching-material-regular",
            name: "teachingMaterialRegular",
            component: () => import("@/views/teaching-material/Regular"),
            meta: {
              text: "教材标准"
            }
          },
          {
            path: "teaching-material",
            name: "teachingMaterial",
            component: () =>
              import("@/views/teaching-material/TeachingMaterial"),
            meta: {
              text: "教材"
            }
          }
        ]
      }
    ]
  }
];
