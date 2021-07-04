<template>
  <div class="notice" :class="{mobile:isMobile}">
    <div class="title" v-if="!isMobile">公司动态</div>
    <ul>
      <li v-for="(item,index) in  copyNewsList" :key="index">
        <div class="left" @click="handleRouterDetail(item.type,item.id)">
          <el-image :src="item.headerImg&&getImage(item.headerImg)" fit="cover" class="image"></el-image>
        </div>

        <div class="center" @click="handleRouterDetail(item.type,item.id)">{{ item.title}}</div>
        <div class="right" @click="handleRouterDetail(item.type,item.id)">{{ item.date}}</div>
        <div class="operate-aere" v-if="!isMobile">
          <el-button @click="handleEditClick(item)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDeleteClick(item)" type="text" size="small">删除</el-button>
        </div>
      </li>
    </ul>
    <edit-news />
    <router-view></router-view>
  </div>
</template>

<script>
import dealImage from "@/utils/dealImage.js";
import editNews from "../editNews/Index.vue";
export default {
  name: "ContactUs",
  inject: ["isMobile"],
  components: {
    editNews,
  },
  data() {
    return {
      copyNewsList: undefined,
      filters: {
        page: 1,
        pageSize: 5,
        type: 1,
      },
    };
  },

  methods: {
    handleRouterDetail(type, id) {
      this.$router.push({
        name: "NewsDetail",
        query: {
          id,
        },
      });
    },
    async getCompanyNewsApi() {
      let res = await this.$ajax.get("/api/companyNews/list", {
        params: this.filters,
      });
      if (res.code === 200) {
        this.copyNewsList = res.data.list || [];
      }
    },
    getImage(headerImg) {
      return (
        headerImg && headerImg.split(";").map((item) => dealImage(item))[0]
      );
    },
    handleEditClick() {},
    handleDeleteClick() {},
  },
  created() {
    this.getCompanyNewsApi();
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
      font-size: 14px;
    }
  }
}
</style>