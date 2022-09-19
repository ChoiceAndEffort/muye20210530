<template>
  <div class="introduce">
    <div class="title" v-if="!isMobile">企业介绍</div>
    <h3>“宇晨牧业” ————博古创新、聚才兴农、诚信为人</h3>
    <p>
      湖北宇晨农牧有限公司成立于2021年,公司以勇攀"猪"峰为愿景,立志构建适合中国国情的生态农业产业化发展新模式
      。
    </p>
    <p>
      宇晨农牧由种猪繁育、生猪养殖、循环农业产业化规划与设计三大版块组成的农业产业一体化企业。
      目前建成投产的有罗田大崎500头核心种猪场和江夏安山1000头扩繁种猪场各1个，咸宁咸安育肥基地7个，参股湖北天邦山2000头扩繁种猪场1个，年出栏优质种猪3万头，育肥猪7万头。
      目前公司正在广西钦州筹划新增10万头生猪产能项目，未来将形成以年出栏20万头的生猪养殖公司。
    </p>
    <p>
      公司秉承“以食品安全为基础，以数据科技为驱动”的发展理念，本着“种养循环，绿色健康，服务百姓，贡献社会”的经营理念，带动农业产业发展，为实现乡村全面振兴，推进美丽乡村建设贡献企业力量。
    </p>
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
  h3 {
    font-weight: 600;
    text-align: center;
    font-size: 32px;
    line-height: 50px;
  }
}
</style>