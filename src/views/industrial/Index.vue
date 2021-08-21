<template>
  <div class="industrial" :class="{isMobile: isMobile}">
    <div class="industrial-img">
      <img :src="circle" alt srcset />
    </div>
    <div class="content">
      <div class="left">
        <el-tabs :tab-position="isMobile?'top':'left'" @tab-click="hanldeGo" v-model="activeName">
          <el-tab-pane
            v-for="item in businessList"
            :label="item.name"
            :key="item.url"
            :name="item.url"
          ></el-tab-pane>
        </el-tabs>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import circle from "@/assets/images/circle.png";
import { businessList } from "@/public/companyList";
export default {
  name: "industrial",
  inject: ["isMobile"],
  data() {
    return {
      businessList,
      circle,
      activeName: "BreedingPig",
    };
  },
  watch:{
    $route:{
      handler(nv){
        // console.log('nv',nv);
        this.activeName=nv.name
        
      }
    }
  },
  methods: {
    hanldeGo(tab, event) {
      console.log(tab, event);
      this.$router.push({ name: tab.name });
    },
  },
};
</script>

<style lang="less" scoped>
@height: 600px;
.industrial {
  height: 100%;
  .industrial-img {
    img {
      width: 100%;
      height: @height;
    }
  }
  .content {
    width: 1200px;
    margin: 10px auto;
    display: flex;
    .left {
      width: 10%;
    }
    .right {
      width: 90%;
      text-align: left;
      min-height: 300px;
    }
  }
}
.isMobile {
  width: 100%;
  * {
    box-sizing: border-box;
  }
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .left {
      width: 100%;
      padding: 0 10px;
    }
    .right {
      width: 100%;
      text-align: center;
      text-align: left;
      padding: 0 10px;
    }
  }
}
</style>