<template>
  <div class="circle">
    <h3>企业介绍</h3>
    <div class="content">
      <!-- <img :src="circleEN" alt srcset /> -->
    </div>
  </div>
</template>

<script>
// import circleEN from "@/assets/images/circleEN.png";
export default {
  name: "Circle1",
  data() {
    return {
      // circleEN,
    };
  },
  methods: {
    handAddMore() {},
  },
};
</script>

<style lang="less" scoped>
.circle {
  padding: 20px 0;
  h3 {
    line-height: 60px;
    font-size: 28px;
    font-weight: 600;
    color: tomato;
    margin-bottom: 10px;
  }
  .content {
    height: 400px;
    width: 100%;
    background: url("~@/assets/images/circleEN.png") no-repeat 0 0;
    // img {
    //   height: 100%;
    //   width: 100%;
    // }
    // img:hover{

    // }
  }
}
</style>