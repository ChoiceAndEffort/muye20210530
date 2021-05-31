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
        <template v-for="item in menuList">
          <template v-if="item.children && item.children.length > 0">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">{{ item.name }}</template>
              <el-menu-item
                :index="son.index"
                v-for="son in item.children"
                :key="son.index"
                @click="handleGoPage(son.url)"
              >{{ son.name }}</el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item
              :index="item.index"
              :key="item.index"
              @click="handleGoPage(item.url)"
            >{{ item.name }}</el-menu-item>
          </template>
        </template>

        <!-- <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">关于宇晨</template>
          <el-menu-item index="2-1">集团简介</el-menu-item>
          <el-menu-item index="2-2">发展历程</el-menu-item>
          <el-menu-item index="2-3"></el-menu-item>
          <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">公司业务</el-menu-item>
        <el-menu-item index="4">
          <template slot="title">联络我们</template>
          <el-menu-item index="4-1">人才招聘</el-menu-item>
          <el-menu-item index="4-1">猪仔供给</el-menu-item>
        </el-menu-item>-->
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
      menuList: [
        {
          name: "首页",
          url: "Home",
          index: "1"
        },
        {
          name: "关于宇晨",
          url: "",
          index: "2",
          children: [
            {
              name: "集团简介",
              url: "",
              index: "2-1"
            },
            {
              name: "发展历程",
              url: "CompanyIntroduce",
              index: "2-2"
            }
          ]
        },
        {
          name: "公司业务",
          url: "Home1",
          index: "3"
        },
        {
          name: "联络我们",
          url: "Home1",
          index: "4"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      // this.activeIndex = key;
    },
    handleGoPage(url) {
      this.$router.push({ name: url });
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

  /deep/.el-submenu__icon-arrow {
    right: 0px;
  }
}
</style>
