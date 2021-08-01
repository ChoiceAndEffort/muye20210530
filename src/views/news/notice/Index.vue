<template>
  <div class="notice" :class="{ mobile: isMobile }">
    <div class="title" v-if="!isMobile">公司动态</div>
    <el-button @click="handleAdd" v-if="!isMobile && isAdmin"> 新增 </el-button>
    <ul @scroll="handleBottomScroll($event)">
      <li v-for="(item, index) in copyNewsList" :key="index">
        <div class="left" @click="handleRouterDetail(item.type, item.id)">
          <el-image
            :src="item.headerImg && getImage(item.headerImg)"
            fit="cover"
            class="image"
          ></el-image>
        </div>

        <div class="center" @click="handleRouterDetail(item.type, item.id)">
          {{ item.title }}
        </div>
        <div class="right" @click="handleRouterDetail(item.type, item.id)">
          {{ item.date }}
        </div>
        <div class="operate-aere" v-if="!isMobile && isAdmin">
          <el-button @click="handleEditClick(item)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="handleDeleteClick(item)" type="text" size="small"
            >删除</el-button
          >
        </div>
      </li>
    </ul>
    <edit-news
      @cancel="handleCancel"
      :dialogFormVisible="dialogFormVisible"
      :fromPage="fromPage"
      :dialogTitle="dialogTitle"
      v-if="dialogFormVisible"
      :handleAddApi="handleAddApi"
      :handleEditApi="handleEditApi"
      :initData="initData"
      :type="1"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import dealImage from "@/utils/dealImage.js";
import editNews from "../editNews/Index.vue";
export default {
  name: "ContactUs",
  inject: ["isMobile", "frontUrl"],
  components: {
    editNews,
  },
  data() {
    return {
      copyNewsList: [],
      filters: {
        page: 1,
        pageSize: 5,
        type: 1,
      },
      dialogFormVisible: false,
      dialogTitle: "新增新闻",
      fromPage: 1, //1-新增,2-编辑
      initData: undefined,
      hasMore: true,
      loading: false,
    };
  },
  computed: {
    isAdmin() {
      return sessionStorage.getItem("isAdmin") === "yuchen";
    },
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
      if (this.loading || !this.hasMore) return;
      this.loading = true;
      try {
        let res = await this.$ajax.get(
          `${this.frontUrl}/api/companyNews/list`,
          {
            params: this.filters,
          }
        );
        if (res.code === 200) {
          this.loading = false;
          const getList = res.data && res.data.list;
          this.copyNewsList = this.copyNewsList.concat(getList);
          this.filters.page += 1;
          this.hasMore = getList.length === this.filters.pageSize;
        }
      } catch (error) {
        this.loading = false;
      }
    },
    getImage(headerImg) {
      return (
        headerImg && headerImg.split("\n").map((item) => dealImage(item))[0]
      );
    },
    handleAdd() {
      this.dialogTitle = "新增新闻";
      this.dialogFormVisible = true;
      this.fromPage = 1;
    },
    handleEditClick(v) {
      this.dialogFormVisible = true;
      this.dialogTitle = "修改新闻";
      this.fromPage = 2;
      this.initData = v;
      console.log("thisinitData", this.initData);
    },

    handleCancel() {
      this.dialogFormVisible = false;
    },

    async handleDeleteClick(item) {
      let res = await this.$ajax.post(
        `${this.frontUrl}/api/companyNews/deleteNews`,
        {
          id: item.id,
        }
      );
      console.log("res", res);
      this.getCompanyNewsApi();
    },

    async handleAddApi(value) {
      let res = await this.$ajax.post(
        `${this.frontUrl}/api/companyNews/addNews`,
        {
          ...value,
        }
      );
      if (res.code === 200) {
        console.log("res11111111111", res);
        this.getCompanyNewsApi();
      }
      this.dialogFormVisible = false;
    },

    async handleEditApi(value) {
      let res = await this.$ajax.post(
        `${this.frontUrl}/api/companyNews/updateNews`,
        {
          ...value,
        }
      );
      if (res.code === 200) {
        console.log("res22222222222", res);
        this.getCompanyNewsApi();
      }
      this.dialogFormVisible = false;
    },
    handleBottomScroll(e) {
      let scrollTop = e.target.scrollTop;
      let clientHeight = e.target.clientHeight;
      let scrollHeight = e.target.scrollHeight;
      if (scrollTop + clientHeight - scrollHeight >= 0) {
        console.log("到底来了");

        this.getCompanyNewsApi();
      }
    },
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
  ul {
    height: 300px;
    overflow-y: auto;
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