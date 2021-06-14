import zhuzai from "@/assets/images/zhuzai.png";

import yangzhu from "@/assets/images/yangzhu.png";
import shucai from "@/assets/images/shucai.jpg";
import luyou from "@/assets/images/lvyou.png";

import zhidaotou from "@/assets/images/zhidaotou.png";
import zhidao1 from "@/assets/images/zhidao1.png";
import zhidao2 from "@/assets/images/zhidao2.png";
import zhidao3 from "@/assets/images/zhidao3.png";

import duanwutou from "@/assets/images/duanwutou.png";
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

export const mockNewsList = [
  {
    id: 4001,
    type: 1,
    news:
      "五月初五是端午，祝福心意全送到：愿你“粽”是快乐，“粽”是微笑，“粽”是喜悦，“粽”是好运，“粽”是成功，“粽”是幸福，“粽”是美好",
    time: "2021-6-14",
    headerImg: duanwutou,
    images: [],
  },
  {
    id: 4002,
    type: 1,
    news:
      "6月13日武汉市农科院高级畜牧师高其双，长江大学高锈纺教授来咸宁宇晨农牧现场考察指导工作。",
    time: "2021-6-13",
    headerImg: zhidaotou,
    images: [zhidao1, zhidao2, zhidao3],
  },
];
