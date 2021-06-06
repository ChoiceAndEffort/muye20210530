export const instroduceList = [
  {
    name: "企业介绍",
    url: "Introduce",
    index: "2-1",
  },
  {
    name: "发展历程",
    url: "History",
    index: "2-2",
  },
  {
    name: "荣誉资质",
    url: "Honor",
    index: "2-3",
  },
  {
    name: "视频中心",
    url: "Video",
    index: "2-4",
  },
];


export const businessList = [
  {
    name: "种猪产业",
    url: "BreedingPig",
    index: "3-1",
  },
  {
    name: "养猪产业",
    url: "PigRaising",
    index: "3-2",
  },
  {
    name: "水生蔬菜",
    url: "Vegetables",
    index: "3-3",
  },
  {
    name: "观光旅游",
    url: "Travel",
    index: "3-4",
  },
];

export const connactUsList = [
  {
    name: "观光咨询",
    url: "Reserve",
    index: "4-1",
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
    name: "联络我们",
    url: "",
    index: "4",
    children: connactUsList,
  },
];
