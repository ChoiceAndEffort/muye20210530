<template>
  <div class="industry-news">
    <div class="title" v-if="!isMobile">行业动态</div>
  </div>
</template>

<script>
export default {
  name: "IndustryNews",
  inject: ["isMobile"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.industry-news {
}
</style>