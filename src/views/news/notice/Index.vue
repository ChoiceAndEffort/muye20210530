<template>
  <div class="notice">
    <div class="title">公司动态</div>
    <ul>
      <li
        v-for="(item,index) in  dealList"
        :key="index"
        @click="handleRouterDetail(item.type,item.id)"
      >
        <div class="left">
          <el-image style="width: 90px; height: 90px" :src="item.headerImg" fit="cover"></el-image>
        </div>

        <div class="center">{{ item.news}}</div>
        <div class="right">{{ item.time}}</div>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
import { mockNewsList } from "@/public/companyList";
export default {
  name: "ContactUs",
  data() {
    return {
      mockNewsList,
    };
  },
  computed: {
    dealList() {
      return this.mockNewsList.filter((item) => item.type === 1);
    },
  },
  methods: {
    handleRouterDetail(type, id) {
      this.$router.push({
        name: "NewsDetail",
        query: {
          type,
          id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.notice {
  li {
    display: flex;
    margin-bottom: 20px;
    height: 100px;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    .left {
      width: 10%;
    }
    .center {
      width: 80%;
      padding: 10px;
    }
    .right {
      width: 10%;
    }
  }
}
</style>