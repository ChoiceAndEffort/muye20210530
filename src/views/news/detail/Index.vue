<template>
  <div class="news-detail">
    <h3>{{ detail && detail.title }}</h3>
    <div v-html="detail && detail.news" class="news"></div>

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
          headerImg && headerImg.split("\n").map((item) => dealImage(item)).slice(1);
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
  h3 {
    width: 100%;
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    padding: 10px 0;
  }
  .news {
    text-align: left;
    line-height: 30px;
    font-size: 20px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.5rem;
    li {
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;

      /deep/.el-image {
        width: 60%;
        height: 100%;
      }
    }
  }
}
</style>