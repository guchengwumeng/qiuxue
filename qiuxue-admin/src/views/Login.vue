<template>
  <div class="login">
    <div class="note">
      <h2>求学大作战</h2>
      <div class="accoun">
        <el-input prefix-icon="el-icon-user" v-model="accoun" placeholder="请输入内容"></el-input>
      </div>
      <div class="accoun">
        <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="cipher" @keyup.enter="press" show-password></el-input>
      </div>
      <P>{{ hint }}</P>
      <button @click="login()" :class={}>登陆</button>
    </div>
  </div>
</template>
<script>
import qs from "qs";
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      accoun: "",
      cipher: "",
      hint: ""
    };
  },
  methods: {
    login() {
      // 登陆接口请求
      var _this = this;
      // axios
      //   .post(
      //     "/api/a/login",
      //     qs.stringify({
      //       name: this.accoun, // 登录名
      //       pwd: this.cipher // 登录密码
      //     })
      //   )
      //   .then(function(res) {
      //     let code = res.data.code; // 获取状态码
      //     //   let message = res.data.message; // 获取返回文本

          let query = "2020";//登陆成功保存值
          sessionStorage.setItem("query", JSON.stringify(query));
      //     if (code == 0) {
            _this.$router.push({
              //页面跳转传参
              path: "/welcome"
            });
        //   } else {
        //     // _this.hint = message;
        //     _this.hint = "请输入正确的用户名及密码";
        //   }
        // });
    },
    press() {
      // 回车跳转
      this.login();
    }
  }
};
</script>

<style lang="scss" scoped>

.accoun{
    width: 80%;
    margin-left: 10%;
    margin-bottom: 20px;
}

.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: {
    image: url(../assets/gaokao886.jpg);
    size: 100% 100%;
    repeat: no-repeat;
  }
}

.note {
  width: 18em;
  height: 18em;
  background: RGBA(255, 255, 255, 0.7);
  border: 1px solid #000;
  border-radius: 10px;
  h2 {
    color: #e8983e;
    text-align: center;
  }

  p {
    height: 22px;
    color: red;
    margin-left: 10%;
    margin: 0 0 10px 10%;
  }
  button {
    width: 80%;
    height: 40px;
    padding: 0;
    margin: 0;
    background-color: #e8983e;
    color:#fff;
    border: 0;
    border-radius: 8px;
    outline: none;
    margin-left: 10%;
    line-height: 40px;
    font-size: 19px;
  }
}
</style>