<template>
  <div class="add-news">
    <!-- 增加新闻 -->
    <el-form :model="formData" ref="ruleForm" :rules="rules">
      <el-form-item label="标题" prop="title">
        <el-input v-model.trim="formData.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select v-model="formData.type" placeholder="请选择">
          <el-option label="公司动态" :value="1"></el-option>
          <el-option label="行业动态" :value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="时间" prop="date">
        <el-date-picker type="date" placeholder="选择日期" v-model="formData.date"></el-date-picker>
      </el-form-item>
      <el-form-item label="图片地址" prop="headerImg">
        <el-input v-model.trim="formData.headerImg" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="news">
        <el-input v-model.trim="formData.news" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handlerConfirm('ruleForm')">确 定</el-button>
    </div>
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
  data() {
    return {
      formData: Object.assign({}, formData),
      rules,
    };
  },
  methods: {
    handleCancel() {
      this.$emit("update", false);
    },
  },
};
</script>

<style lang="less" scoped>
.add-news {
  // width: 1200px;
  // margin: 0 auto;
}
</style>