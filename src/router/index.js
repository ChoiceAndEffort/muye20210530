import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home", //首页
    name: "Home",
    component: () => import("@/views/home/Home.vue"),
  },

  {
    path: "/company", //关于公司
    name: "Company",
    component: () => import("@/views/company/Index.vue"),
    children: [
      {
        path: "/company/words", //公司介绍
        name: "Words",
        component: () => import("@/views/company/words/Index.vue"),
      },
      {
        path: "/company/introduce", //公司介绍
        name: "Introduce",
        component: () => import("@/views/company/introduce/Index.vue"),
      },
      {
        path: "/company/history", //公司发展
        name: "History",
        component: () => import("@/views/company/history/Index.vue"),
      },
      {
        path: "/company/honor", //荣誉资质
        name: "Honor",
        component: () => import("@/views/company/honor/Index.vue"),
      },
      {
        path: "/company/video", //视频中心
        name: "Video",
        component: () => import("@/views/company/video/Index.vue"),
      },
    ],
  },
  {
    path: "/industrial", //产业发展
    name: "Industrial",
    component: () => import("@/views/industrial/Index.vue"),
    children: [
      {
        path: "/industrial/breeding-pig", //种猪
        name: "BreedingPig",
        component: () => import("@/views/industrial/breedingPig/Index.vue"),
      },
      {
        path: "/industrial/pig-raising", //养猪
        name: "PigRaising",
        component: () => import("@/views/industrial/pigRaising/Index.vue"),
      },
      {
        path: "/industrial/vegetables", //水生素材
        name: "Vegetables",
        component: () => import("@/views/industrial/vegetables/Index.vue"),
      },
      {
        path: "/industrial/travel", //观光旅游
        name: "Travel",
        component: () => import("@/views/industrial/travel/Index.vue"),
      },
    ],
  },
  {
    path: "/news", //公司新闻
    name: "News",
    component: () => import("@/views/news/Index.vue"),
    children: [
      {
        path: "/news/notice",
        name: "Notice",
        component: () => import("@/views/news/notice/Index.vue"),
      },
      {
        path: "/news/industry-news",
        name: "IndustryNews",
        component: () => import("@/views/news/industryNews/Index.vue"),
      },
      {
        path: "/news/detail",
        name: "NewsDetail",
        component: () => import("@/views/news/detail/Index.vue"),
      },
    ],
  },
  {
    path: "/contact-us", //联系我们
    name: "ContactUs",
    component: () => import("@/views/contactUs/Index.vue"),
    children: [
      {
        path: "/contact-us/reserve", //
        name: "Reserve",
        component: () => import("@/views/contactUs/reserve/Index.vue"),
      },
    ],
  },
  {
    path: "*", //首页
    redirect: "/home",
  },
];



const ENV = process.env.NODE_ENV;
const router = new VueRouter({
  mode: "history",
  base: ENV === "production" ? "/yuchen/" : "", //生产环境加对应的文件夹名称，开发环境不加；
  routes,
});

export default router;
