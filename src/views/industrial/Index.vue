<template>
  <div class="industrial">
    <!-- <ul>
      <li v-for="(item,index) in businessList" :key="index">
          <p>{{item.name}}</p>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { businessList } from "@/public/companyList";
export default {
  name: "industrial",
  data() {
    return {
      businessList,
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.industrial {
 
}
</style>