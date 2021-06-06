<template>
  <div class="news">
    <div class="notice-img">
      <img :src="news" alt srcset />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import news from "@/assets/images/news.png";

export default {
  name: "News",
  data() {
    return {
      news,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.news {
  img {
    height: 400px;
    width: 100%;
  }
}
</style>