<template>
  <div class="vegetables">
    <div class="industrial-title" v-if="!isMobile">蔬菜产业</div>
    <p>
      园区计划引进种植的水生蔬菜有水芹润航1、2、3号及水芹品种资源21个，金芙蓉水果莲、早熟藕鄂莲7号、双季茭白品种3个，水生植物花卉32个；发展50亩中山杉作为消纳沼液试验研究。通过种养结合，使低产田变高产田，低效田变万元田，把养殖废物变成宝贝，并实现养殖场零污染零排放。本项目建成和取得的成果，将为生猪养殖等企业的生态循环农业发展提供经验和案例，加速我区的水生蔬菜和水生花卉种质优化和生产技术改进，为水生蔬菜和水生花卉产业发展进行积极的探索。
    </p>
    <ul>
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="item.url" alt="" srcset="" />
      </li>
    </ul>
  </div>
</template>

<script>
import shuiqin from "@/assets/images/shuiqin.png";
import hehua from "@/assets/images/hehua.png";
import lingba from "@/assets/images/lingba.png";
export default {
  name: "Vegetables",
  inject: ["isMobile"],
  data() {
    return {
      imgList: [
        {
          url: shuiqin,
        },
        {
          url: hehua,
        },
        {
          url: lingba,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.vegetables {
  padding: 10px 0;
  line-height: 20px;
  ul {
    li {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      img {
        width: 80%;
        height: 300px;
      }
    }
  }
}
</style>