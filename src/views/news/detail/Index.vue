<template>
  <div class="news-detail">
    <p>{{getListObj&&getListObj.news}}</p>

    <ul>
      <li v-for="(item,index) in getListObj&&getListObj.images" :key="index">
        <el-image :src="item" fit="cover"></el-image>
      </li>
    </ul>
  </div>
</template>

<script>
import { mockNewsList } from "@/public/companyList";
export default {
  data() {
    return {
      mockNewsList,
      id: "",
    };
  },
  computed: {
    getListObj() {
      return this.mockNewsList.find((item) => item.id === this.id);
    },
  },
  methods: {},
  created() {
    this.id = parseInt(this.$route.query.id);
  },
};
</script>

<style lang="less" scoped>
.news-detail {
  p {
    text-align: center;
    line-height: 60px;
  }
}
</style>