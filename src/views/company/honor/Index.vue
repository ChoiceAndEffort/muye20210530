<template>
  <div class="honor">
    <div class="title" v-if="!isMobile">荣誉资质</div>
  </div>
</template>

<script>
export default {
  name: "Honor",
  inject: ["isMobile"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
.honor {
  padding: 10px 0;
}
</style>