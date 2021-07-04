<template>
  <div class="news-table">
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogFormVisible"
      v-if="dialogFormVisible"
      :close-on-click-modal="false"
    >
      <publice @update="handlerChangeVisible" :init-data="initData" />
    </el-dialog>
  </div>
</template>

<script>
import Publice from "./publice.vue";
export default {
  components: {
    Publice,
  },

  data() {
    return {
      dialogFormVisible: true,
      dialogTitle: "",
      initData: undefined,
    };
  },
  methods: {
    handlerChangeVisible(v) {
      this.dialogFormVisible = v;
    },
  },
};
</script>

<style lang="less" scoped>
.news-table {
}
</style>