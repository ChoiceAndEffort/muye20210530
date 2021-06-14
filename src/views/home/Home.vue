<template>
  <div class="home">
    <div class="nav">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in navList" :key="item" trigger="click">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 公司业务 -->
    <div class="circle">
      <Circle1 />
    </div>
    <!-- 产业领域 -->
    <div class="secton">
      <ScopeOfBusiness />
    </div>
    <!-- 公司新闻 -->
    <div class="news">
      <News />
    </div>
  </div>
</template>

<script>
import Circle1 from "./circle.vue";
import ScopeOfBusiness from "./scopeOfBusiness.vue";
import News from "./news.vue";
import home from "@/assets/images/home.jpg";
import damen from "@/assets/images/damen.jpg";
import qincai from "@/assets/images/qincai.jpg";
import rukou from "@/assets/images/rukou.jpg";

export default {
  name: "Home",
  components: {
    ScopeOfBusiness,
    News,
    Circle1,
  },
  data() {
    return {
      navList: [home, damen, rukou, qincai],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.home {
  // height: 100%;
  .nav {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .secton,
  .news,.circle {
    width: 1140px;
    margin: 0 auto;
  }
}
</style>