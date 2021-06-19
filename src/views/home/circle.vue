<template>
  <div class="circle">
    <h3>企业介绍</h3>
    <div class="content" @click="handleRouterPush">
      <p>集团化消费循环农业食材专供小镇</p>
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
    handleRouterPush() {
      this.$router.push({ name: "Introduce" });
    },
  },
};
</script>

<style lang="less" scoped>
.circle {
  padding: 20px 0;
  width: 100%;
  * {
    box-sizing: border-box;
  }
  h3 {
    line-height: 60px;
    font-size: 28px;
    font-weight: 600;
    color: tomato;
    margin-bottom: 10px;
    width: 100%;
  }
  .content {
    height: 600px;
    width: 100%;
    background: url("~@/assets/images/circleEN.png") no-repeat left top/100%
      100%;

    p {
      color: #409eff;
      font-size: 28px;
      background: transparent;
      width: 40%;
      height: 50px;
      line-height: 50px;
      opacity: 0.6;
    }
  }
  .content:hover {
    p {
      color: #ce1a1a;
      opacity: 1;
      position: relative;
      animation: mymove 5s infinite;
      -webkit-animation: mymove 5s infinite alternate; /*Safari and Chrome*/
    }
  }
}

@keyframes mymove {
  0% {
    left: 0%;
  }
  100% {
    left: 60%;
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
  0% {
    left: 0%;
  }
  100% {
    left: 60%;
  }
}
</style>