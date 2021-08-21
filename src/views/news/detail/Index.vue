<template>
  <div class="news-detail">
    <p v-html="detail && detail.news"></p>

    <ul>
      <li v-for="(item, index) in detail && detail.images" :key="index">
        <el-image :src="item" fit="cover" v-if="item"></el-image>
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
  inject: ["isMobile", "frontUrl"],
  methods: {
    async getCompanyNewsOneApi() {
      let res = await this.$ajax.get(
        `${this.frontUrl}/api/companyNews/detail`,
        {
          params: {
            id: this.query.id,
          },
        }
      );
      if (res.code === 200) {
        let { headerImg = "" } = res.data;

        this.detail = res.data;
        this.detail.images =
          headerImg && headerImg.split("\n").map((item) => dealImage(item));
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
    font-size: 20px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      width: 100%;
      margin-bottom: 10px;

      /deep/.el-image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>