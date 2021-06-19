<template>
  <div class="footer">
    <div class="content" :class="{active:!isMobile}">
      <div class="content-left">
        <ul>
          <div class="company-name">宇晨农牧</div>
          <li>
            <span class="title">公司地址：武汉市江夏区纸坊街文化大道113号聚诚怡江大厦A单元22层8室</span>
            <span class="title-content"></span>
          </li>
          <li>
            <span class="title">联系电话：</span>
            <span class="title-content">18171438963</span>
          </li>
          <li>
            <span class="title">公司邮箱：</span>
            <span class="title-content"></span>
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
  inject: ["isMobile"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.footer {
  * {
    box-sizing: border-box;
  }
  color: #999;
  background: #303036;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .content {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .content-left,
    .content-right {
      width: 100%;
    }
    .content-left {
      text-align: left;
      .company-name {
        padding: 5px 0;
        font-size: 20px;
        font-weight: 600;
      }
      ul {
        width: 100%;
        li {
          padding: 5px 0;
        }
      }
    }
  }
  .active {
    width: 1200px;
    margin: 0 auto;
    .content-left,
    .content-right {
      width: 50%;
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