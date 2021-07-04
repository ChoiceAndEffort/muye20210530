<template>
  <div class="news-detail">
    <p>{{detail&&detail.news}}</p>

    <ul>
      <li v-for="(item,index) in detail&&detail.images" :key="index">
        <el-image :src="item" fit="cover"></el-image>
      </li>
    </ul>
  </div>
</template>

<script>
import dealImage from "@/utils/dealImage.js";
export default {
  data() {
    return {
      query: this.$route.query,
      detail: undefined,
    };
  },

  methods: {
    async getCompanyNewsOneApi() {
      let res = await this.$ajax.get("/api/companyNews/detail", {
        params: {
          id: this.query.id,
        },
      });
      if (res.code === 200) {
        let { headerImg = "" } = res.data;

        this.detail = res.data;
        this.detail.images =
          headerImg && headerImg.split(";").map((item) => dealImage(item));
      }
    },
  },
  created() {
    this.getCompanyNewsOneApi();
  },
};
</script>

<style lang="less" scoped>
.news-detail {
  p {
    text-align: left;
    line-height: 30px;
  }
}
</style>