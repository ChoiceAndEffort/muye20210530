<template>
  <div id="app">


    <mu-ban>
      <keep-alive>
        <router-view />
      </keep-alive>
    </mu-ban>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from "./views/home.vue";
export default {
  name: "App",
  components: {
    // HelloWorld
    // Home
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: auto;
  min-width: 1000px;
}
</style>
