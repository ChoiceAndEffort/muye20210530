<template>
  <div id="app">
    <!-- v-if="!isMobile" -->
    <mu-ban>
      <keep-alive>
        <router-view />
      </keep-alive>
    </mu-ban>
    <!-- <mobeil-mu-ban v-else>
      <keep-alive>
        <router-view />
      </keep-alive>
    </mobeil-mu-ban>-->
  </div>
</template>

<script>
const reg =
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
export default {
  name: "App",
  components: {},
  provide() {
    return {
      isMobile: this.isMobile,
    };
  },
  computed: {
    isMobile() {
      return navigator.userAgent.match(reg);
    },
  },

  mounted() {
    // 375像素宽设计稿  ->  50px      所有设计稿上的像素均需除以50计算为得到的rem
    // if (this.isMobile) {
    //   this.$nextTick(function () {
    //     // 适配不同屏幕，改变根font-size值
    //     if (
    //       document.documentElement.clientWidth <=
    //       document.documentElement.clientHeight
    //     ) {
    //       document.documentElement.style.fontSize =
    //         document.documentElement.clientWidth / 7.5 + "px";
    //     } else {
    //       document.documentElement.style.fontSize =
    //         document.documentElement.clientWidth / 13.34 + "px";
    //     }
    //   });
    // }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: auto;
}
</style>
