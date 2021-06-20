<template>
  <div class="mu-ban" :class="{pc:!isMobile}">
    <Header />
    <div class="mu-ban-content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "MuBan",
  inject: ["isMobile"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.mu-ban {
  display: flex;
  flex-direction: column;
  height: 100%;
  .mu-ban-content {
    flex: 1;
  }
}
.pc {
  min-width: 1000px;
}
</style>