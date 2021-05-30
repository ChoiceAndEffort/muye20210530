<template>
  <div class="company-introduce">
    <Header />
    <div>
      <img src alt srcset />
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
    </div>
    <Footer />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Muban",
  data() {
    return {
      instroduceList: [
        {
          name: "董事长致辞",
          url: ""
        },
        {
          name: "企业介绍",
          url: "Introduce"
        },
        {
          name: "组织架构",
          url: ""
        },
        {
          name: "发展进程",
          url: ""
        },
        {
          name: "公司荣誉",
          url: ""
        }
      ],
      title: "董事长致辞"
    };
  },
  methods: {
    handleTabSwitch(item) {
      this.title = item.name;
      this.$router.push({ name: item.url });
    }
  }
};
</script>

<style lang="less" scoped>
.company-introduce {
  width: 1140px;
  margin: 0 auto;
  .content {
    // display: flex;
    // text-align: center;
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