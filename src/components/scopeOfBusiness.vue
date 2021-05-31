<template>
  <div class="scope-business">
    <ul>
      <li v-for="(item,index) in BusinessList" :key="index">
          <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ScopeOfBusiness",
  data() {
    return {
      BusinessList: [
        {
          name: "种猪产业"
        },
        {
          name: "养猪产业"
        },
        {
          name: "水生蔬菜"
        },
         {
          name: "观光旅游"
        },
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.scope-business {
    padding: 10px 0;
    ul{
        display: flex;
        justify-content: space-around;
    }
}
</style>