<template>
  <div class="news">
    <h3>公司新闻</h3>
    <div class="content">
      <ul>
        <li v-for="(item,index) in copyNewsList" :key="index">
          <div class="top">
            <div class="left">{{status[item.type]}}</div>
            <div class="center">{{item.news}}</div>
            <div class="right">
              {{item.time}}
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <el-divider></el-divider>
        </li>
        <el-button plain class="el-icon-plus" @click="handAddMore">加载更多</el-button>
      </ul>
    </div>
  </div>
</template>

<script>
import { mockNewsList } from "@/public/companyList";

export default {
  name: "News",
  data() {
    return {
      copyNewsList: mockNewsList.slice(0, 5),
      status: {
        1: "公司动态",
        2: "行业动态",
      },
    };
  },
  methods: {
    handAddMore() {
      this.copyNewsList = mockNewsList;
    },
  },
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
        text-align: left;
      }
      .left {
        text-align: center;
        // text-indent: 24px;
        width: 10%;
        background: #e6a23c;
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
        width: 100px;
        margin-right: 10px;
      }
      .right {
        text-align: right;
        width: 10%;
      }
    }
  }
}
</style>