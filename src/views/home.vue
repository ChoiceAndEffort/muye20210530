<template>
  <div class="home">
    <Header />
    <div class="nav">
      <el-carousel height="300px">
        <el-carousel-item v-for="item in navList" :key="item" trigger="click">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      navList: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fst.douding.cn%2Fupload%2Fpublish_article%2Fimage%2F20170913%2F1505266457891091646.jpg&refer=http%3A%2F%2Fst.douding.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        "https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/d6ca7bcb0a46f21f65ce357efd246b600c33ae21.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3690502224,711323828&fm=26&gp=0.jpg",
        "http://s1.sinaimg.cn/orignal/4e800a4dn7812d8926680"
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
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
}
</style>