<template>
  <div class="news">
    <h3>公司新闻</h3>
    <div class="content">
      <ul>
        <li v-for="(item,index) in newsList" :key="index">
          <div class="top">
            <div class="left">{{item.type}}</div>
            <div class="center">{{item.news}}</div>
            <div class="right">
              时间
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>

          <el-divider></el-divider>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        {
          type: "公告",
          news: "公司成立",
        },
        {
          type: "产业动态",
          news: "产业扩大",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.news {
  padding: 20px 0;
  h3 {
    line-height: 60px;
    font-size: 28px;
    font-weight: 600;
    color: tomato;
    margin-bottom: 10px;
  }
  li {
    .top {
      display: flex;
      align-items: center;
      .center {
        width: 80%;
      }
      .left {
        text-align: left;
        text-indent: 24px;
        width: 10%;
      }
      .right {
        text-align: right;
        width: 10%;
      }
    }
  }
}
</style>