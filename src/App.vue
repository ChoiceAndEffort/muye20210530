<!--
 * @Author: lg
 * @Date: 2023-09-08 12:37:51
 * @LastEditors: lg
 * @LastEditTime: 2023-09-08 12:53:41
 * @Description: 
 * @FilePath: \muye20210530\src\App.vue
-->
<template>
  <div id="app">
    <mu-ban>
      <keep-alive>
        <router-view />
      </keep-alive>
    </mu-ban>
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
      frontUrl: this.frontUrl,
    };
  },
  computed: {
    isMobile() {
      return navigator.userAgent.match(reg);
    },
    frontUrl() {
      let frontUrl = "http://hubeiyuchen.cn:7001";
      // process.env.NODE_ENV === "production"
      //   ? "http://hubeiyuchen.asia:7001"
      //   : "http://127.0.0.1:7001";

      return frontUrl;
    },
  },

  mounted() {},
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
