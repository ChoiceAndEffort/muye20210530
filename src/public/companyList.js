import zhuzai from "@/assets/images/zhuzai.png";

import yangzhu from "@/assets/images/yangzhu.png";
import shucai from "@/assets/images/shucai.jpg";
import luyou from "@/assets/images/lvyou.png";

export const instroduceList = [
  {
    name: "总经理寄语",
    url: "Words",
    index: "2-1",
  },
  {
    name: "企业介绍",
    url: "Introduce",
    index: "2-2",
  },
  {
    name: "发展历程",
    url: "History",
    index: "2-3",
  },
  {
    name: "荣誉资质",
    url: "Honor",
    index: "2-4",
  },
  {
    name: "视频中心",
    url: "Video",
    index: "2-5",
  },
];

export const businessList = [
  {
    name: "种猪产业",
    url: "BreedingPig",
    index: "3-1",
    img: zhuzai,
  },
  {
    name: "养猪产业",
    url: "PigRaising",
    index: "3-2",
    img: yangzhu,
  },
  {
    name: "水生蔬菜",
    url: "Vegetables",
    index: "3-3",
    img: shucai,
  },
  {
    name: "观光旅游",
    url: "Travel",
    index: "3-4",
    img: luyou,
  },
];

export const connactUsList = [
  {
    name: "观光咨询",
    url: "Reserve",
    index: "5-1",
  },
];

export const newsList = [
  {
    name: "公司动态",
    url: "Notice",
    index: "4-1",
  },
  {
    name: "行业动态",
    url: "IndustryNews",
    index: "4-2",
  },
];
export const menuList = [
  {
    name: "首页",
    url: "Home",
    index: "1",
  },
  {
    name: "关于宇晨",
    url: "",
    index: "2",
    children: instroduceList,
  },
  {
    name: "公司业务",
    url: "",
    index: "3",
    children: businessList,
  },
  {
    name: "公司新闻",
    url: "",
    index: "4",
    children: newsList,
  },
  {
    name: "联络我们",
    url: "",
    index: "5",
    children: connactUsList,
  },
];
