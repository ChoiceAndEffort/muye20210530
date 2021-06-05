import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/reset.less";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import MuBan from "@/components/MuBan.vue";

Vue.component("Header", Header);
Vue.component("Footer", Footer);
Vue.component("MuBan", MuBan);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
