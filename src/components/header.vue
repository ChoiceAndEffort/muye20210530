<template>
  <div class="header">
    <div class="left">
      <h1>湖北宇晨农牧有限公司</h1>
    </div>
    <div class="right">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">关于宇晨</template>
          <el-menu-item index="2-1">集团简介</el-menu-item>
          <el-menu-item index="2-2">发展历程</el-menu-item>
          <!-- <el-menu-item index="2-3"></el-menu-item> -->
          <!-- <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>-->
        </el-submenu>
        <el-menu-item index="3">公司业务</el-menu-item>
        <el-menu-item index="4">
          <!-- <a href="https://www.ele.me" target="_blank">联络我们</a> -->
          <el-menu-item index="2-1">联络我们</el-menu-item>
        </el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 1140px;
  margin: 0 auto;
  height: 75px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  h1 {
    font-size: 24px;
    color: #409eff;
    height: 100%;
    line-height: 75px;
  }
  /deep/.el-menu.el-menu--horizontal {
    border-bottom: none;
  }
}
</style>