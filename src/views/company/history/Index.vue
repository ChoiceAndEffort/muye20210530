<template>
  <div class="history">
    <div class="title">发展历程</div>
    <el-timeline>
      <el-timeline-item timestamp="2021/04/14" placement="top">
        <el-card>
          <h4>湖北宇晨农牧有限公司公司注册成立</h4>
          <p>2021-04-14日</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021/05/11" placement="top">
        <el-card>
          <h4>分公司咸宁宇晨农牧有限公司注册成立</h4>
          <p>2021-05-11</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.history {
  padding: 10px 0;
  /deep/.el-timeline {
    width: 50%;
  }
}
</style>