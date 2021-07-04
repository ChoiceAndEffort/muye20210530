import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/reset.less";
import ajax from "./ajax/axios";

import "element-ui/lib/theme-chalk/index.css";
import {
  Icon,
  Menu,
  Submenu,
  MenuItem,
  Carousel,
  CarouselItem,
  Button,
  Timeline,
  TimelineItem,
  Card,
  Divider,
  Tabs,
  TabPane,
  Image,
} from "element-ui";

import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import MuBan from "@/components/MuBan.vue";
import MobeilMuBan from "@/components/MobeilMuBan.vue";
Vue.component("Header", Header);
Vue.component("Footer", Footer);
Vue.component("MuBan", MuBan);
Vue.component("MobeilMuBan", MobeilMuBan);

Vue.use(Icon);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(MenuItem);
Vue.use(Card);
Vue.use(Divider);

Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Image);

Vue.prototype.$ajax = ajax;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
