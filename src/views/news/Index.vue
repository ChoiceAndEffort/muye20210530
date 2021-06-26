<template>
  <div class="news" :class="{isMobile: isMobile}">
    <div class="notice-img">
      <img :src="news" alt srcset />
    </div>
    <div class="content">
      <el-tabs v-model="title" @tab-click="handleClick" v-if="isMobile">
        <el-tab-pane v-for="item in newsList" :label="item.name" :key="item.index" :name="item.url"></el-tab-pane>
      </el-tabs>
      <ul class="introduce-list" v-else>
        <li
          v-for="item in newsList"
          :key="item.index"
          :class="{active:title===item.url}"
          @click="handleTabSwitch(item)"
        >{{item.name}}</li>
      </ul>
      <div class="son-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import news from "@/assets/images/news.png";
import { newsList } from "@/public/companyList";
export default {
  name: "News",
  inject: ["isMobile"],
  data() {
    return {
      news,
      newsList,
      title: "Notice",
    };
  },

  watch: {
    //处理刷新后默认高亮
    $route: {
      handler(nv) {
        // const { name } = nv;
        // if (name === "IndustryNews") {
        //   this.$router.push({ name: "Home" });
        // }
        console.log("nv", nv);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handleTabSwitch(item) {
      this.title = item.url;
      this.$router.push({ name: item.url });
    },
    handleClick(tab) {
      this.$router.push({ name: tab.name });
    },
  },
};
</script>

<style lang="less" scoped>
@height: 400px;
.news {
  img {
    height: @height;
    width: 100%;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
  }
  .introduce-list {
    display: flex;
    justify-content: center;

    li {
      background: #f1701b;
      color: #fff;
      padding: 12px 25px;
      text-align: center;
      margin: 0 8px 0 8px;
      border: 1px solid #fff;
      font-size: 14px;
      border-radius: 5px;
    }
    li:hover {
      background: #007c53;
    }
    .active {
      background: #007c53;
    }
  }
  .son-content {
    margin: 20px 0;
    border-radius: 10px;
    border: 1px dashed #ccc;
    min-height: 300px;
    text-align: left;
    padding: 20px;
  }
}
.isMobile {
  * {
    box-sizing: border-box;
  }
  .content {
    width: 100%;
    padding: 0 10px;
  }
}
</style>