<template>
  <div class="travel">
    <div class="industrial-title" v-if="!isMobile">旅游产业</div>
    <p>充分利用咸宁市良好的自然山水条件，，青山环抱、绿树掩映、小桥流水、涂鸦动漫，仿佛一夜之间，古老贫穷地，突脱成新娘，一派端庄秀气、江南风韵模样。以人为本、以文化为底蕴、以绿化为载体，以繁荣经济促进社会发展为目的，来打造此次农业生态景观设计。</p>
    <ul>
      <li v-for="(image,index) in xianningList" :key="index">
        <el-image :src="image" fit="cover"></el-image>
      </li>
    </ul>
    <p>
      印象·枫树咀生态循环观光农业休闲示范园位于江夏区安山街道美丽的鲁湖之滨枫树咀，是集观光、种植、休闲于一体的现代农业科技示范园区。秉承绿水青山就是金山银山，运用生态循环种养农业的理念，通过技术创新实现现代农业的生态效益、经济效益、社会效益协调发展。
      园区悠远宁静，朴树、红枫姿态飘扬。晴时如湖上碧玉，水光潋滟；雨时树影空蒙，若隐若现；春有草花接水，夏有荷韵飘香，秋有红叶似火，冬有湖鸟一色。
    </p>
    <ul>
      <li v-for="(image,index) in anshanList" :key="index">
        <el-image :src="image" fit="cover"></el-image>
      </li>
    </ul>
  </div>
</template>

<script>
import anshan2 from "@/assets/images/anshan2.png";
import anshan1 from "@/assets/images/anshan1.png";
import xianning1 from "@/assets/images/xianning1.png";
import xianning2 from "@/assets/images/xianning2.png";

export default {
  name: "Travel",
  inject: ["isMobile"],
  data() {
    return {
      xianningList: [xianning2, xianning1],
      anshanList: [anshan1, anshan2],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.travel {
  padding: 10px 0;
  p {
    font-size: 20px;
    padding: 10px 0;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    width: 100%;

    margin-bottom: 10px;

    /deep/.el-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>