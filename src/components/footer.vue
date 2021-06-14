<template>
  <div class="footer">
    <div class="content">
      <div class="content-left">
        <ul>
          <div class="company-name">宇晨农牧</div>
          <li>
            <span class="title">公司地址：武汉市江夏区纸坊街文化大道113号聚诚怡江大厦A单元22层8室</span>
            <span class="content"></span>
          </li>
          <li>
            <span class="title">联系电话：</span>
            <span class="content"></span>
          </li>
          <li>
            <span class="title">公司邮箱：</span>
            <span class="content"></span>
          </li>
        </ul>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.footer {
  color: #999;
  background: #303036;
  // position: absolute;
  // right: 0;
  // left: 0;
  // bottom: 0;

  display: flex;
  justify-content: space-between;

  .content {
    padding: 20px;
    width: 1140px;
    margin: 0 auto;
    .content-left,
    .content-right {
      width: 50%;
    }
    .content-left {
      text-align: left;
      .company-name {
        padding: 5px 0;
        font-size: 20px;
        font-weight: 600;
      }
      ul {
        li {
          padding: 5px 0;
        }
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>