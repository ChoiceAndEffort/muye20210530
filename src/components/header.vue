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
        background-color="#fff"
        text-color="#303133"
        active-text-color="#409eff"
      >
        <template v-for="item in menuList">
          <template v-if="!(item.children && item.children.length)>0 ">
            <el-menu-item
              :index="item.index"
              :key="item.index"
              @click="handleGoPage(item.url)"
            >{{ item.name }}</el-menu-item>
          </template>
          <template v-else>
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">{{ item.name }}</template>
              <el-menu-item
                v-for="son in item.children"
                :index="son.index"
                :key="son.index"
                @click="handleGoPage(son.url)"
              >{{ son.name }}</el-menu-item>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { menuList } from "@/public/companyList";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "",
      menuList,
    };
  },
  watch: {
    //处理刷新后默认高亮
    $route: {
      handler(nv) {
        const { name } = nv;
        this.menuList.forEach((element) => {
          if (element.url === name) {
            this.activeIndex = element.index;
          }
          element.children &&
            element.children.forEach((el) => {
              if (el.url === name) {
                this.activeIndex = el.index;
              }
            });
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleGoPage(url) {
      this.$router.push({ name: url });
    },
  },
};
</script>

<style lang="less" scoped>
@height: 60px;
.header {
  // width: 1140px;
  // margin: 0 auto;
  height: @height;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background: #fff;
  top: 0px;
  h1 {
    font-size: 24px;
    color: #409eff;
    height: 100%;
    line-height: @height;
    margin-left: 200px;
  }

  /deep/.el-submenu__icon-arrow {
    right: 0px;
  }
  /deep/.el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  /deep/.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none !important;
    background: #c6e2ff !important;
  }
  /deep/ .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom: none !important;
    background: #c6e2ff !important;
  }
}
</style>
