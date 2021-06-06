<template>
  <div class="industrial">
    <div class="industrial-img">
      <img :src="circle" alt srcset />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import circle from "@/assets/images/circle.png";
// import { businessList } from "@/public/companyList";
export default {
  name: "industrial",
  data() {
    return {
      // businessList,
      circle,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@height: 300px;
.industrial {
  height: 100%;
  .industrial-img {
    img {
      width: 100%;
      height: @height;
    }
  }
  .content {
    width: 1140px;
    margin: 0 auto;
  }
}
</style>