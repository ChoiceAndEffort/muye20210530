<template>
  <div class="history">
    <div class="title" v-if="!isMobile">发展历程</div>
    <div class="area">
      <ul class="time-line" v-if="!isMobile">
        <li v-for="(item, index) in list" :key="index">
          <p :class="{ active: activeIndex === index + 1 }">
            {{ item.time }}
          </p>
          <div class="line"></div>
        </li>
      </ul>
      <el-carousel
        :type="isMobile ? '' : 'card'"
        :interval="4000"
        height="350px"
        indicator-position="none"
        @change="handleCardChange"
      >
        <el-carousel-item v-for="(item, index) in list" :key="index">
          <div class="card-item">
            <p>{{ item.time }}年</p>
            <h3>{{ item.tag }}</h3>
            <div class="content">
              {{ item.content }}
            </div>
            <div class="content1">
              {{ item.content1 }}
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- <el-timeline>
      <el-timeline-item timestamp="2010年3月12日-2015年3月12日" placement="top">
        <el-card>
          <h4>租赁广西贵港科松养猪场，开启企业发展之路</h4>
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
    </el-timeline> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  inject: ["isMobile"],
  data() {
    return {
      activeIndex: 1,
      list: [
        {
          tag: "启航",
          img: "",
          time: 2010,
          content: "租赁广西贵港科松养猪场，开启企业发展之路",
          content1: "流转家乡58.42亩土地建设生态农业园",
        },
        {
          tag: "扩张",
          img: "",
          time: 2011,
          content:
            "成立武汉市鑫天曦农牧有限责任公司发展生态种养业、建设美丽乡村",
          content1:
            "响应省委“三乡工程”回乡自主创业，开展养猪产业精准扶贫工作、建设美丽乡村",
        },
        {
          tag: "扩张",
          img: "",
          time: 2016,
          content:
            "在黄冈市罗田县大崎镇开展“公司+家庭农场”养猪产业精准扶贫工作、建设美丽乡村",
          content1:
            "在黄冈市团风县贾庙乡开展“公司+家庭农场”养猪产业精准扶贫工作、建设美丽乡村",
        },
        {
          tag: "扩张",
          img: "",
          time: 2017,
          content:
            "参股成立湖北天帮山生态农牧业发展有限公司，开展养猪产业精准扶贫工作、建设美丽乡村",
          content1:
            "在黄冈市团风县贾庙乡开展“公司+家庭农场”养猪产业精准扶贫工作、建设美丽乡村",
        },
        {
          tag: "扩张",
          img: "",
          time: 2020,
          content:
            "参股成立广西鑫天曦农牧有限责任公司，开展养猪产业精准扶贫工作、建设美丽乡村",
          content1: "",
        },
        {
          tag: "扩张",
          img: "",
          time: 2021,
          content: "成立湖北宇晨农牧有限公司，发展生态农业",
          content1: "成立咸宁宇晨农牧有限公司，发展生态农业",
        },
      ],
    };
  },
  methods: {
    handleCardChange(index) {
      this.activeIndex = index + 1;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.history {
  padding: 10px 0;
  .area {
    background: #3c72db;
    height: 600px;
    padding: 0 20px;
  }

  /deep/.el-timeline {
    width: 100%;
  }
  .time-line {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    li {
      flex: 1;
      display: flex;
      align-items: center;
      color: #fff;
      .line {
        border-bottom: 1px dashed #fff;
        flex: 1;
      }

      .active {
        color: red;
        font-weight: 600;
        font-size: 30px;
      }
    }
    li:last-child .line {
      border-bottom: none;
    }
  }
  .card-item {
    padding: 10px;
    p {
      color: #f08300;
      font-size: 36px;
      font-weight: 600;
    }
    h3 {
      color: red;
      font-size: 28px;
      opacity: 0.75;
      padding: 3px 0;
    }
    .content {
      line-height: 20px;
      margin: 5px 0;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>