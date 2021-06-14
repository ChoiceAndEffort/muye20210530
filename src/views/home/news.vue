<template>
  <div class="news">
    <h3>公司新闻</h3>
    <div class="content">
      <ul>
        <li v-for="(item,index) in copyNewsList" :key="index">
          <div class="top">
            <div class="left">{{item.type}}</div>
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
const newsList = [
  {
    type: "公司动态",
    news: "五月初五是端午，祝福心意全送到：愿你“粽”是快乐，“粽”是微笑，“粽”是喜悦，“粽”是好运，“粽”是成功，“粽”是幸福，“粽”是美好",
    time: "2021-6-14",
  },
  {
    type: "公司动态",
    news: "6月13日武汉市农科院高级畜牧师高其双，长江大学高锈纺教授来咸宁宇晨农牧现场考察指导工作。",
    time: "2021-6-13",
  },
];
export default {
  name: "News",
  data() {
    return {
      copyNewsList: newsList.slice(0, 5),
    };
  },
  methods: {
    handAddMore() {
      this.copyNewsList = newsList;
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