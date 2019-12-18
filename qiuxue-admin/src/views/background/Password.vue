<template>
  <article>
    <div class="heading">修改密码</div>
    <div class="row">
      <div class="md-5">
        &emsp;&emsp;&emsp;原密码：
        <div class="md-6">
        <el-input id="a" placeholder="请输入旧密码" v-model="former" show-password></el-input></div>
      </div>
      <div class="md-5">
       &emsp;&emsp;&emsp;新密码：<div class="md-6">
        <el-input id="b" placeholder="请输入新密码" v-model="novo" show-password></el-input></div>
      </div>
      <div class="md-5">
        再次输入密码：<div class="md-6">
        <el-input id="c" placeholder="请再次输入并确认密码" v-model="again" show-password></el-input></div>
      </div>
      <div></div>
    </div>
  </article>
</template>
<script>
export default {
  name: "password",
  data() {
    return {
        former:"",
        novo:"",
        again:""

    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
article {
  margin: 3rem 1rem;
  width: 100%;
  border: 1px solid #ddd;
  background-color: #fff;
  .heading {
    padding: 1rem 2rem;
    font-size: 25px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    margin-bottom: 5rem;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    .md-5 {
      display: inherit;
      margin-bottom:2rem;
      white-space:nowrap; 
      line-height: 4rem;
    .md-6{
    width: 30rem;
    }
    }
  }
}
// .el-input {
//     height: 4rem;
//     border-radius: 15px;
//     font-size: x-large;
// }
</style>