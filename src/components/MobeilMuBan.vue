<template>
  <div class="mu-ban">
    <div class="header">
      <div class="left">
        <h1 v-show="false">湖北宇晨农牧有限公司</h1>
        <img src="../assets/images/logo.png" alt srcset />
      </div>
      <div class="right" @click="handleShow">
        <van-icon name="wap-nav" />
      </div>
    </div>

    <van-popup v-model="show" position="top" :style="{ height: '70%' }">88888888888</van-popup>
    <div class="mu-ban-content">
      <slot />
    </div>

    <footer>
      <ul>
        <li class="company-name">宇晨农牧</li>
        <li>
          <span class="title">公司地址：湖北省武汉市江夏区安山街道青春村牛家湾</span>
          <span class="content"></span>
        </li>
        <li>
          <span class="title">联系电话：</span>
          <span class="content">18171438963</span>
        </li>
        <li>
          <span class="title">公司邮箱：326942157@qq.com</span>
          <span class="content"></span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import { Icon, Popup } from "vant";
// import Footer from './footer.vue';
export default {
  name: "MuBan",
  components: {
    // Footer
    // "van-tree-select": TreeSelect,
    "van-popup": Popup,
    "van-icon": Icon,
  },
  data() {
    return {
      activeId: 1,
      activeIndex: 0,
      show: false,
    };
  },
  methods: {
    handleShow() {
      this.show = true;
    },
  },
};
</script>

<style lang="less" scoped>
.mu-ban {
  font-size: 0.4rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  .header {
    position: fixed;
    width: 100%;
    background-color: white;
    left: 0;
    top: 0;
    z-index: 9999;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    .left {
      img {
        transform: scale(0.5);
      }
    }
    .right {
      // background: url("../assets/images/mob-ct.png") no-repeat center center;
      width: 0.78rem;
      height: 0.5rem;
    }
  }
  /deep/.van-popup--top {
    top: 1rem;
  }
  .mu-ban-content {
    min-height: 70%;
  }
  footer {
    font-size: 0.24rem;
    background: #303036;
    color: #999;
    text-align: left;
    padding: 0.4rem 0.2rem;
    // height: 3 rem;
    li {
      line-height: 0.48rem;
    }
  }
}
</style>