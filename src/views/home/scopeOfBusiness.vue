<template>
  <div class="scope-business">
    <h3>产业领域</h3>
    <ul>
      <li v-for="(item,index) in businessList" :key="index" @click="handRouterPush(item.url)">
        <p>{{item.name}}</p>
        <img :src="item.img" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import { businessList } from "@/public/companyList";
export default {
  name: "ScopeOfBusiness",
  data() {
    return {
      businessList,
    };
  },
  methods: {
    handRouterPush(url) {
      this.$router.push({ name: url });
    },
  },
};
</script>

<style lang="less" scoped>
.scope-business {
  // padding: 20px 0;
  h3 {
    line-height: 60px;
    font-size: 28px;
    font-weight: 600;
    color: tomato;
    margin-bottom: 10px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    li {
      width: 20%;
      height: 200px;
      position: relative;
      p {
        line-height: 60px;
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        width: 100%;
        font-weight: 600;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 1px solid #ccc;
      }
    }
    li:hover {
      transform: scale(1.15);
    }
  }
}
</style>