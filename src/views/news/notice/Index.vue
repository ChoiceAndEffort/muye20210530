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
          <el-image :src="item.headerImg" fit="cover" class="image"></el-image>
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
  * {
    box-sizing: border-box;
  }
  li {
    width: 100%;
    display: flex;
    padding: 10px 0;
    border-bottom: 1px dashed #ccc;
    align-items: center;
    .left {
      width: 10%;
      .image {
        width: 90px;
        height: 90px;
        border-radius: 10px;
      }
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