<template>
  <div class="history">
    <div class="title" v-if="!isMobile">发展历程</div>
    <el-timeline>
      <el-timeline-item timestamp="2010年3月12日-2015年3月12日" placement="top">
        <el-card>
          <h4>租赁广西贵港科松养猪场，开启企业发展之路</h4>
          <!-- <p>2021-04-14日</p> -->
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2010年3月-2015年3月" placement="top">
        <el-card>
          <h4>流转家乡58.42亩土地建设生态农业园</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2011年1月-2011年7月" placement="top">
        <el-card>
          <h4>成立武汉市鑫天曦农牧有限责任公司发展生态种养业、建设美丽乡村</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2011年7月-2016年10月 " placement="top">
        <el-card>
          <h4>
            响应省委“三乡工程”回乡自主创业，开展养猪产业精准扶贫工作、建设美丽乡村
          </h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2016年10月-2016年12月 " placement="top">
        <el-card>
          <h4>
            在黄冈市罗田县大崎镇开展“公司+家庭农场”养猪产业精准扶贫工作、建设美丽乡村
          </h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2016年12月-2017年2月 " placement="top">
        <el-card>
          <h4>
            在黄冈市团风县贾庙乡开展“公司+家庭农场”养猪产业精准扶贫工作、建设美丽乡村
          </h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2017年2月-2017年9月 " placement="top">
        <el-card>
          <h4>
            参股成立湖北天帮山生态农牧业发展有限公司，开展养猪产业精准扶贫工作、建设美丽乡村
          </h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020年11月-至今 " placement="top">
        <el-card>
          <h4>
            参股成立广西鑫天曦农牧有限责任公司，开展养猪产业精准扶贫工作、建设美丽乡村
          </h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021年4月-至今 " placement="top">
        <el-card>
          <h4>成立湖北宇晨农牧有限公司，发展生态农业</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021年5月-至今 " placement="top">
        <el-card>
          <h4>成立咸宁宇晨农牧有限公司，发展生态农业</h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "History",
  inject: ["isMobile"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.history {
  padding: 10px 0;
  /deep/.el-timeline {
    width: 100%;
  }
}
</style>