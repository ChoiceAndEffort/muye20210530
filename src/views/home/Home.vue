<template>
  <div class="home">
    <div class="nav">
      <el-carousel height="300px">
        <el-carousel-item v-for="item in navList" :key="item" trigger="click">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="secton">
      <ScopeOfBusiness />
    </div>
    <div class="news">
      <News />
    </div>
  </div>
</template>

<script>
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
  position: relative;
  height: 100%;
  .nav {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .secton,.news {
    width: 1140px;
    margin: 0 auto;
  }
}
</style>