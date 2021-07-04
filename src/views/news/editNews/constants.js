export const rules = {
    name: [
      { required: true, message: "请输入朝代名字", trigger: ["blur", "change"] }
    ],
    time: [
      {
        required: true,
        message: "请输入朝代存在时间",
        trigger: ["blur", "change"]
      }
    ],
    emperor: [
      {
        required: true,
        message: "请输入开国皇帝",
        trigger: ["blur", "change"]
      }
    ],
    city: [
      {
        required: true,
        message: "请输入朝代位置",
        trigger: ["blur", "change"]
      }
    ]
  };