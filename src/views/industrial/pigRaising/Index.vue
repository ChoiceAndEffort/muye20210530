<template>
  <div class="pig-raising">
    <div class="industrial-title" v-if="!isMobile">养猪产业</div>
    <p>现拥有湖北江夏1000头、罗田2000头PIC配套系祖代种猪场各1个，湖北罗田600头新美系原种猪场1个、湖北团风“公司+家庭农场”1个，广西钦州计划新建年出栏30万头生猪养殖基地1个，形成年出栏优质PIC父母代种猪3万头，育肥猪7万头，年出栏40万头的生猪养殖产业。</p>
  </div>
</template>

<script>
export default {
  name: "BreedingPig",
  inject: ["isMobile"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.pig-raising {
  padding: 10px 0;
}
</style>