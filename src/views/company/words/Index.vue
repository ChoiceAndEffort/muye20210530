<template>
  <div class="words">
    <div class="title">总经理寄语</div>
    <div class="top">
      <div class="left">
        <el-image style="width: 300px; height: 300px" :src="leader" :fit="fit"></el-image>
      </div>
      <div class="right">
        <p>牛传峰</p>
        <p>湖北宇晨农牧有限公司董事，总经理</p>
      </div>
    </div>
    <div class="content">
      <h3>牢记初心，筑梦宇晨</h3>投身农牧事业的二十年，是我人生重要的二十年，也是宇晨事业上升的二十年。
      从艰辛的个人创业，到构筑大家的事业平台，我一直有个愿望，那就是，做些对地方、对行业、对社会有价值的事儿。前些年，我们将这些心愿提炼为宇晨集团的使命和愿景——“专注于优质农产品的生产和服务，做世界上具有影响力的农牧企业”，这就是我们的“初心”。
      这些年来，不管外界诱惑有多大，不管前行路上有多难，我和我的伙伴们，始终不为诱惑所动，始终不畏艰难困苦，始终围绕农牧事业这个“初心”，抓投资、建实体，抓技改、建项目，抓品质、建体系，抓管理、建机制，抓战略、建平台......
      这些年来，“安全优质，规范高效，学习拼搏，专注务实，诚信友善，合作共赢”始终是我们的价值遵循，“增进客户价值，促进客户契合”始终是我们的核心理念，“助力行业发展，贡献地方建设”始终是我们的共同追求，“持续改善”是我们宇晨人的唯一核心价值观。“雄关漫道真如铁，而今迈步从头越”。宇晨集团还是一家小公司，“宇晨梦”还有很长的路要走。
    </div>
  </div>
</template>

<script>
import leader from "@/assets/images/leader.png";
export default {
  name: "Words",
  data() {
    return {
      leader,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.words {
  .top {
    display: flex;
    .left {
      width: 30%;
    }
    .right {
      p {
        line-height: 35px;
        text-align: left;
      }
    }
  }
  .content {
    padding: 20px;
    h3 {
      font-weight: 600;
      text-align: center;
      font-size: 32px;
      line-height: 50px;
    }
    text-align: left;
    line-height: 40px;
  }
}
</style>