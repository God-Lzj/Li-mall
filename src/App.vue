<template>
  <div id="app">
    <router-view></router-view>
    <maintabbar></maintabbar>
  </div>
</template>
<script>
import maintabbar from "@/components/tabbar/main-tabbar";
export default {
  name: "App",
  components: {
    maintabbar,
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
