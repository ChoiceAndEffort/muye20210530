<template>
  <div class="contact-us" :class="{pc:!isMobile}">
    <div class="contact-us-img">
      <img :src="contact" alt srcset />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import contact from "@/assets/images/contact.jpg";

export default {
  name: "ContactUs",
  inject: ["isMobile"],
  data() {
    return {
      contact,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@height: 400px;
.contact-us {
  height: 100%;
  .contact-us-img {
    img {
      width: 100%;
      height: @height;
    }
  }
  .content {
    width: 100%;
  }
}
.pc {
  .content {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>