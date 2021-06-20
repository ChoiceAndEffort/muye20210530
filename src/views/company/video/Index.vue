<template>
  <div class="video">
    <div class="title" v-if="!isMobile">视频中心</div>
  </div>
</template>

<script>
export default {
  name: "Video",
  inject: ["isMobile"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.video {
  padding: 10px 0;
}
</style>