<template>
  <div class="honor">
    <div class="title" v-if="!isMobile">荣誉资质</div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <el-image :src="list[index]" :preview-src-list="list"> </el-image>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Honor",
  inject: ["isMobile"],
  data() {
    return {
      list: [
        "http://hubeiyuchen.asia/download/zizhi/1.png",
        "http://hubeiyuchen.asia/download/zizhi/2.png",
        "http://hubeiyuchen.asia/download/zizhi/3.png",
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.honor {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 16px;
    }
  }
  padding: 10px 0;
  /deep/ .el-image {
    width: 300px;
    height: 200px;
  }
}
</style>