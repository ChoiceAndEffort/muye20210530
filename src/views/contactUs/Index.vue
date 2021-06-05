<template>
  <div class="contact-us">
    <mu-ban>
      <div class="contact-us-img">
        <img :src="contact" alt srcset />
      </div>
      <div class="content">
        <router-view />
      </div>
    </mu-ban>
  </div>
</template>

<script>
import contact from "@/assets/images/contact.jpg";

export default {
  name: "ContactUs",
  data() {
    return {
      contact,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@height: 300px;
.contact-us {
  height: 100%;
  .contact-us-img {
    img {
      width: 100%;
      height: @height;
    }
  }
  .content {
    width: 1140px;
    margin: 0 auto;
  }
}
</style>