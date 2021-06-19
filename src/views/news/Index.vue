<template>
  <div class="news">
    <div class="notice-img">
      <img :src="news" alt srcset />
    </div>
    <div class="content">
      <ul class="introduce-list">
        <li
          v-for="item in newsList"
          :key="item.name"
          :class="{active:title===item.name}"
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
  data() {
    return {
      news,
      newsList,
      title: "公司动态",
    };
  },

  // watch: {
  //   //处理刷新后默认高亮
  //   $route: {
  //     handler(nv) {
  //       // const { name } = nv;
  //       console.log("nv", nv);

  //       // let obj = this.newsList.find((item) => item.url === name);
  //       // this.title = obj && obj.name;
  //       // console.log('this',this.title,obj);
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  methods: {
    handleTabSwitch(item) {
      this.title = item.name;
      this.$router.push({ name: item.url });
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
</style>