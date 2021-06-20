<template>
  <div class="company-introduce">
    <div class="company-img">
      <img :src="damen" alt srcset />
    </div>
    <div class="content" :class="{isMobile:isMobile}">
      <el-tabs v-model="title" @tab-click="handleClick" v-if="isMobile">
        <el-tab-pane
          v-for="item in instroduceList"
          :label="item.name"
          :key="item.index"
          :name="item.url"
        ></el-tab-pane>
      </el-tabs>
      <ul class="introduce-list" v-else>
        <li
          v-for="item in instroduceList"
          :key="item.index"
          :class="{active:title===item.url}"
          @click="handleTabSwitch(item)"
        >{{item.name}}</li>
      </ul>

      <div class="son-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { instroduceList } from "@/public/companyList";
import damen from "@/assets/images/damen.jpg";
export default {
  name: "Muban",
  inject: ["isMobile"],
  data() {
    return {
      instroduceList,
      title: "Words",
      damen,
    };
  },
  watch: {
    //处理刷新后默认高亮
    $route: {
      handler(nv) {
        const { name } = nv;
        let obj = this.instroduceList.find((item) => item.url === name);
        this.title = obj && obj.url;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handleTabSwitch(item) {
      this.title = item.url;
      this.$router.push({ name: item.url });
    },
    handleClick(tab) {
      this.$router.push({ name: tab.name });
    },
  },
};
</script>

<style lang="less" scoped>
@height: 400px;
.company-introduce {
  height: 100%;
  width: 100%;
  * {
    box-sizing: border-box;
  }
  h3 {
    line-height: 60px;
    font-size: 28px;
    font-weight: 600;
    color: tomato;
    margin-bottom: 10px;
  }
  .company-img {
    img {
      width: 100%;
      height: @height;
    }
  }
  .content {
    width: 1200px;
    margin: 0 auto;
  }
  .isMobile {
    width: 100%;
    padding: 10px;
  }
  .introduce-list {
    display: flex;
    justify-content: center;

    li {
      background: #f1701b;
      color: #fff;
      padding: 12px 25px;
      text-align: center;
      margin: 0 8px 0 8px;
      border: 1px solid #fff;
      font-size: 14px;
      border-radius: 5px;
    }
    li:hover {
      background: #007c53;
    }
    .active {
      background: #007c53;
    }
  }
  .son-content {
    margin: 20px 0;
    border-radius: 10px;
    border: 1px dashed #ccc;
    min-height: 300px;
    text-align: left;
    padding: 20px;
  }
}
</style>