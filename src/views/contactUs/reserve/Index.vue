<template>
  <div class="reserve">
    <h3>旅游预订</h3>
    <div class="phone">
      <el-icon class="el-icon-phone-outline"></el-icon>:18171438963
    </div>
  </div>
</template>

<script>
export default {
  name: "Reserve",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.reserve {
  padding: 10px 0;
  min-height: 400px;
  h3 {
    font-size: 36px;
  }
  .phone {
    font-size: 48px;
    line-height: 380px;
  }
}
</style>