import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Home",
  },
  {
    path: "/home",//首页
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },

  {
    path: "/company",//关于公司
    name: "Company",
    component: () => import("@/views/company/Index.vue"),
    children: [
      {
        path: "/company/introduce",//公司介绍
        name: "Introduce",
        component: () => import("@/views/company/introduce/Index.vue"),
      },
      {
        path: "/company/history",//公司发展
        name: "History",
        component: () => import("@/views/company/history/Index.vue"),
      },
      {
        path: "/company/honor",//荣誉资质
        name: "Honor",
        component: () => import("@/views/company/honor/Index.vue"),
      },
      {
        path: "/company/video",//视频中心
        name: "Video",
        component: () => import("@/views/company/video/Index.vue"),
      },
    ],
  },
  {
    path: "/industrial",//产业发展
    name: "Industrial",
    component: () => import("@/views/industrial/Index.vue"),
    children: [
      {
        path: "/industrial/breeding-pig",//
        name: "BreedingPig",
        component: () => import("@/views/industrial/breedingPig/Index.vue"),
      },
      {
        path: "/industrial/pig-raising",//
        name: "PigRaising",
        component: () => import("@/views/industrial/pigRaising/Index.vue"),
      },
      {
        path: "/industrial/vegetables",//
        name: "Vegetables",
        component: () => import("@/views/industrial/vegetables/Index.vue"),
      },
      {
        path: "/industrial/travel",//
        name: "Travel",
        component: () => import("@/views/industrial/travel/Index.vue"),
      },
    ],
  },
  {
    path: "/contact-us",//联系我们
    name: "ContactUs",
    component: () => import("@/views/contactUs/Index.vue"),
    children: [
      {
        path: "/contact-us/reserve",//
        name: "Reserve",
        component: () => import("@/views/contactUs/reserve/Index.vue"),
      },
      // {
      //   path: "/industrial/pig-raising",//
      //   name: "PigRaising",
      //   component: () => import("@/views/industrial/pigRaising/Index.vue"),
      // },
      // {
      //   path: "/industrial/vegetables",//
      //   name: "Vegetables",
      //   component: () => import("@/views/industrial/vegetables/Index.vue"),
      // },
      // {
      //   path: "/industrial/travel",//
      //   name: "Travel",
      //   component: () => import("@/views/industrial/travel/Index.vue"),
      // },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
