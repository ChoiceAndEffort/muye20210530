<template>
  <div class="notice" :class="{mobile:isMobile}">
    <div class="title" v-if="!isMobile">公司动态</div>
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
  inject: ["isMobile"],
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
    padding: 5px 0;
    border-bottom: 1px dashed #ccc;
    align-items: center;
    .left {
      width: 10%;
      .image {
        width: 60px;
        height: 60px;
        border-radius: 10px;
      }
    }
    .center {
      width: 80%;
      padding: 0 10px;
    }
    .right {
      width: 10%;
    }
  }
}
.mobile {
  li {
    width: 100%;
    .left {
      width: 20%;
    }
    .center {
      width: 55%;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .right {
      width: 25%;
    }
  }
}
</style>