<template>
  <div class="mu-ban">
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
  // min-width: 1000px;
  .mu-ban-content {
    flex: 1;
  }
}
</style>