<template>
  <div class="header">
    <div class="left">
      <h1>咸宁宇晨农牧有限公司</h1>
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
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { menuList } from "@/public/companyList";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      menuList,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      // this.activeIndex = key;
    },
    handleGoPage(url) {
      // if(url!=='Home'){
      this.$router.push({ name: url });
      // }

    },
  },
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
