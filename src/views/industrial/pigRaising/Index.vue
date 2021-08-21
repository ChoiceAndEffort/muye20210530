<template>
  <div class="pig-raising">
    <div class="industrial-title" v-if="!isMobile">养猪产业</div>
    <p>
      现拥有湖北江夏1000头、罗田2000头PIC配套系祖代种猪场各1个，湖北罗田600头新美系原种猪场1个、湖北团风“公司+家庭农场”1个，广西钦州计划新建年出栏30万头生猪养殖基地1个，形成年出栏优质PIC父母代种猪3万头，育肥猪7万头，年出栏40万头的生猪养殖产业。
    </p>
    <ul>
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="item.url" alt="" srcset="" />
      </li>
    </ul>
  </div>
</template>

<script>
import zhu1 from "@/assets/images/zhu1.png";
import zhu2 from "@/assets/images/zhu2.png";
import zhu3 from "@/assets/images/zhu3.png";
export default {
  name: "BreedingPig",
  inject: ["isMobile"],
  data() {
    return {
      imgList: [
        {
          url: zhu1,
        },
        {
          url: zhu2,
        },
        {
          url: zhu3,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.pig-raising {
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