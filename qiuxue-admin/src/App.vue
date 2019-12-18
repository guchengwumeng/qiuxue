<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");/*全局引入ui框架样式 */
body{
  margin:0px;
  background-color:azure;
}
.el-submenu__title i{
    color:#fff;
}
</style>
