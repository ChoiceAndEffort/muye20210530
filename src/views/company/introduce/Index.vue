<template>
  <div class="introduce">
    <div class="title" v-if="!isMobile">企业介绍</div>
    <p>湖北宇晨农牧有限公司是专业从事优良PIC配套系种猪生产及生猪养殖新技术、新设备市场开发与推广，生态化种养殖的公司。现拥有湖北江夏1000头、罗田2000头PIC配套系祖代种猪场各1个，湖北罗田600头新美系原种猪场1个、湖北团风“公司+家庭农场”1个，广西钦州计划新建年出栏30万头生猪养殖基地1个，形成年出栏优质PIC父母代种猪3万头，育肥猪7万头，年出栏40万头的生猪养殖产业。</p>

    <p>公司以发展生态循环农业为主题，计划建成占地1000亩的现代生态循环农业科技示范园，以“猪-沼-水生蔬菜-无公害果蔬”生态循环模式，打造集科学研究、种苗繁育、生产示范、种养结合、乡村振兴、休闲体验教育为一体的生态循环农业科技示范园。</p>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  inject: ["isMobile"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.introduce {
  line-height: 40px;
  p {
    text-indent: 24px;
  }
}
</style>