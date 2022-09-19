<template>
  <div class="news" :class="{ mobile: isMobile }">
    <h3>公司新闻</h3>
    <div class="content">
      <ul>
        <li
          v-for="(item, index) in copyNewsList&&copyNewsList.slice(0, 5)"
          :key="index"
          @click="handleRouterDetail(item.type, item.id)"
        >
          <div class="top">
            <div class="left">{{ status[item.type] }}</div>
            <div class="center">{{ item.title }}</div>
            <div class="right">{{ item.date }}</div>
          </div>
          <el-divider></el-divider>
        </li>
        <!-- <el-button plain class="el-icon-plus" @click="handAddMore">加载更多</el-button> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  inject: ["isMobile", "frontUrl"],
  data() {
    return {
      copyNewsList: undefined,
      status: {
        1: "公司动态",
        2: "行业动态",
      },
    };
  },
  methods: {
    handAddMore() {
      // this.copyNewsList = mockNewsList;
    },
    handleRouterDetail(type, id) {
      this.$router.push({
        name: "NewsDetail",
        query: {
          // type,
          id,
        },
      });
    },
    async getCompanyNewsApi() {
      let res = await this.$ajax.get(`${this.frontUrl}/api/companyNews/list`, {
        params: {
          page: 1,
          pageSize: 5,
        },
      });
      if (res.code === 200) {
        this.copyNewsList = res.data.list || [];
      }
    },
  },
  created() {
    this.getCompanyNewsApi();
  },
};
</script>

<style lang="less" scoped>
.news {
  padding: 20px 0;
  width: 100%;
  margin-top: 20px;
  * {
    box-sizing: border-box;
  }
  h3 {
    line-height: 60px;
    font-size: 28px;
    font-weight: 600;
    color: tomato;
    margin-bottom: 10px;
  }
  li {
    width: 100%;
    .top {
      display: flex;
      align-items: center;
      width: 100%;
      .center {
        width: 70%;
        text-align: left;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .left {
        text-align: center;
        width: 15%;
        background: #e6a23c;
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
        width: 100px;
        margin-right: 10px;
      }
      .right {
        text-align: right;
        width: 15%;
      }
    }
  }
}
.mobile {
  li {
    width: 100%;
    font-size: 14px;
    .top {
      .left {
        width: 20%;
      }
      .center {
        width: 55%;
        line-height: 20px;
      }
      .right {
        width: 25%;
      }
    }
  }
}
</style>