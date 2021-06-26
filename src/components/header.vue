<template>
  <div class="header" :class="{pc:!isMobile}">
    <div class="content">
      <div class="left">
        <h1 v-show="false">湖北宇晨农牧有限公司</h1>
        <img src="../assets/images/logo.png" alt srcset />
      </div>
      <div class="right">
        <div class="icon" @click="show=!show" v-if="isMobile">
          <van-icon name="wap-nav" />
        </div>
        <el-menu
          v-else
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
    <van-popup v-model="show" position="top" v-if="isMobile" :style="{ height: '70%' }">
      <van-collapse v-model="activeNames" accordion>
        <template v-for="item in menuList">
          <div
            class="van-collapse-item-father"
            v-if="!(item.children&&item.children.length>0)"
            :key="item.index"
            @click="handleGoPage(item.url)"
          >
            <div class="son">{{item.name}}</div>
          </div>
          <van-collapse-item :title="item.name" :name="item.index" v-else :key="item.index">
            <div
              class="van-collapse-item-son"
              v-for="son in item.children"
              :index="son.index"
              :key="son.index"
              @click="handleGoPage(son.url)"
            >{{ son.name }}</div>
          </van-collapse-item>
        </template>
      </van-collapse>
    </van-popup>
  </div>
</template>

<script>
import { Icon, Popup, Collapse, CollapseItem } from "vant";
import { menuList } from "@/public/companyList";
export default {
  name: "Header",
  inject: ["isMobile"],
  components: {
    "van-popup": Popup,
    "van-icon": Icon,
    "van-collapse": Collapse,
    "van-collapse-item": CollapseItem,
  },
  data() {
    return {
      activeNames: [],
      activeIndex: "",
      menuList,
      show: false,
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
    handleShow() {
      this.show = true;
    },
  },
};
</script>

<style lang="less" scoped>
@height: 60px;
.header {
  z-index: 1000;
  height: @height;
  position: sticky;
  background: #fff;
  top: 0px;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    display: inline-block;
    img {
      height: 60px;
      width: 100px;
    }
  }
  .right {
    margin-right: 10px;
    font-size: 36px;
    color: #c1c1c1;
  }
  .van-collapse-item-father {
    padding: 0px 16px;
    .son {
      border-bottom: 1px solid #ebedf0;
      padding: 10px 0;
    }
    .son:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      background: #ebedf0;
      width: 100%;
      height: 1px;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
    }
  }
  .van-collapse-item-son {
    padding: 5px 0;
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
  /deep/.van-popup--top {
    top: 60px;
    text-align: left;
  }
  /deep/ .van-overlay {
    top: 60px;
  }
}
.pc {
  .content {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
