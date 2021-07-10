export const rules = {
  title: [
    { required: true, message: "请输入新闻标题", trigger: ["blur", "change"] },
  ],
  date: [
    {
      required: true,
      message: "请选择新闻时间",
      trigger: ["blur", "change"],
    },
  ],
  headerImg: [
    {
      required: true,
      message: "请输入图片地址",
      trigger: ["blur", "change"],
    },
  ],
  news: [
    {
      required: true,
      message: "请输入新闻描述",
      trigger: ["blur", "change"],
    },
  ],
};
