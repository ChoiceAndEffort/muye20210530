<template>
  <div class="breeding-pig">
    <div class="industrial-title" v-if="!isMobile">种猪产业</div>
    <p>
      现拥有湖北江夏1000头、罗田2000头PIC配套系祖代种猪场各1个，湖北罗田600头新美系原种猪场1个、湖北团风“公司+家庭农场”1个。
    </p>
    <ul>
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="item.url" alt="" srcset="" />
      </li>
    </ul>
  </div>
</template>

<script>
import zhong1 from "@/assets/images/zhong1.png";

export default {
  name: "BreedingPig",
  inject: ["isMobile"],
  data() {
    return {
      imgList: [
        {
          url: zhong1,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.breeding-pig {
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