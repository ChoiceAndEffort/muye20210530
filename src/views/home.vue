<template>
  <div class="home">
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
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">关于我们</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
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
    <div class="nav">
      <el-carousel height="300px">
        <el-carousel-item v-for="item in navList" :key="item" trigger="click">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="footer">
      <div class="content">
        <div class="content-left">
          <ul>
            <div class="company-name">宇晨农牧</div>
            <li>
              <span class="title">公司地址：</span>
              <span class="content"></span>
            </li>
            <li>
              <span class="title">联系电话：</span>
              <span class="content"></span>
            </li>
            <li>
              <span class="title">公司邮箱：</span>
              <span class="content"></span>
            </li>
          </ul>
        </div>
        <div class="content-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      navList: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fst.douding.cn%2Fupload%2Fpublish_article%2Fimage%2F20170913%2F1505266457891091646.jpg&refer=http%3A%2F%2Fst.douding.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        "https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/d6ca7bcb0a46f21f65ce357efd246b600c33ae21.jpg",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jqkc.net%2Fuser%2Fimglib%2Fgssxdyzgcjsyjzx%2F%7B133AB029-2754-255B-B674-C968849C5BED%7D.jpg&refer=http%3A%2F%2Fwww.jqkc.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        "http://s1.sinaimg.cn/orignal/4e800a4dn7812d8926680"
      ]
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
.home {
  position: relative;
  height: 100%;
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
  }
  .nav {
    img {
      height: 100%;
    }
  }
  .footer {
    color: #999;
    background: #303036;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: space-between;

    .content {
      padding: 20px;
      width: 1140px;
      margin: 0 auto;
      .content-left,
      .content-right {
        width: 50%;
      }
      .content-left {
        text-align: left;
        .company-name {
          padding: 3px 0;
        }
        ul {
          li {
            padding: 3px 0;
          }
        }
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>