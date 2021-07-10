<template>
  <div class="news-table">
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogFormVisible"
      :show-close="false"
    >
      <!-- 增加新闻 -->
      <el-form
        :model="formData"
        ref="ruleForm"
        :rules="rules"
        label-position="left"
      >
        <el-form-item label="标题" prop="title">
          <el-input
            v-model.trim="formData.title"
            autocomplete="off"
            style="width: 60%"
          ></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="formData.type" placeholder="请选择">
            <el-option label="公司动态" :value="1"></el-option>
            <el-option label="行业动态" :value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间" prop="date">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
            v-model="formData.date"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="图片地址" prop="headerImg">
          <el-input
            v-model.trim="formData.headerImg"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="news">
          <el-input v-model.trim="formData.news" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handlerConfirm('ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { rules } from "./constants";
const formData = {
  title: undefined,
  type: "",
  headerImg: "",
  news: "",
  date: "",
};
export default {
  props: {
    dialogFormVisible: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    dialogTitle: {
      type: String,
      required: false,
      default: () => "",
    },
  },
  components: {},

  data() {
    return {
      rules,
      formData: Object.assign({}, formData),
    };
  },
  methods: {
    handleCancel() {
      this.$emit("cancel", false);
    },
    async handlerConfirm(formName) {
      const validate = await this.$refs[formName].validate().catch(() => false);
      if (validate) {
        if (this.fromPage !== 1) {
          this.handleEditApi();
        } else {
          this.handleAddApi();
        }
      }
    },

    async handleAddApi() {
      let res = await this.$ajax.get("/api/companyNews/list", {
        params: this.formData,
      });
      if (res.code === 200) {
        console.log("res", res);
      }
    },
    async handleEditApi() {
      let res = await this.$ajax.get("/api/companyNews/list", {
        params: this.formData,
      });
      if (res.code === 200) {
        console.log("res", res);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.news-table {
}
</style>