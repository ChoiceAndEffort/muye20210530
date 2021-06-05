<template>
  <div class="company-introduce">
    <mu-ban>
      <div class="company-img">
        <img :src="damen" alt srcset />
      </div>
      <div class="content">
        <p class="title">{{title}}</p>
        <ul class="introduce-list">
          <li
            v-for="item in instroduceList"
            :key="item.name"
            :class="{active:title===item.name}"
            @click="handleTabSwitch(item)"
          >{{item.name}}</li>
        </ul>
        <router-view />
      </div>
    </mu-ban>
  </div>
</template>

<script>
import { instroduceList } from "@/public/companyList";
import damen from "@/assets/images/damen.jpg";
export default {
  name: "Muban",
  data() {
    return {
      instroduceList,
      title: "企业介绍",
      damen,
    };
  },
  methods: {
    handleTabSwitch(item) {
      this.title = item.name;
      this.$router.push({ name: item.url });
    },
  },
};
</script>

<style lang="less" scoped>
@height: 350px;

.company-introduce {
  height: 100%;
  .company-img {
    img {
      width: 100%;
      height: @height;
    }
  }
  .content {
    width: 1140px;
    margin: 0 auto;
    .title {
      padding: 10px 0;
      font-size: 30px;
      font-weight: 600;
    }
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
}
</style>