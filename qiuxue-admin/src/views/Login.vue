<template>
  <div class="login">
    <div class="note">
      <h2>求学大作战</h2>
      <div class="accoun">
        <el-input prefix-icon="el-icon-user" v-model="accoun" placeholder="请输入内容"></el-input>
      </div>
      <div class="accoun">
        <el-input
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
          v-model="cipher"
          @keyup.enter="press"
          show-password
        ></el-input>
      </div>
      <P>{{ hint }}</P>
      <button @click="login()">登陆</button>
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
      accoun: "11",
      cipher: "",
      hint: ""
    };
  },
  methods: {
    login() {
      // 登陆接口请求
      var _this = this;   
    //  axios.post ("/api/admin/login/fpx",
    //  qs.stringify({
    //         name: this.accoun, // 登录名
    //         password: this.cipher // 登录密码
    //       }))
    //     .then(function(res) {
          // let code = res.data.code, // 获取状态码
          //  message = res.data.msg, // 获取返回文本
          let query = _this.accoun;//登陆成功保存值
          sessionStorage.setItem("query", JSON.stringify(query));
    //       if (code == 110200) {
            _this.$router.push({
              //页面跳转传参
              path: "/welcome"
            });
        //   } else {
        //     _this.hint = message;
          
        //   }
        // })
        // .catch(function(err){
        //   _this.$alert('登陆失败，服务器无法连接','',{
        //     confirmButtonText: '确定',
        //     center:true,
        //     showClose:false
        //   })
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
.accoun {
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
    color: #fff;
    border: 0;
    border-radius: 8px;
    outline: none;
    margin-left: 10%;
    line-height: 40px;
    font-size: 19px;
  }
}
</style>