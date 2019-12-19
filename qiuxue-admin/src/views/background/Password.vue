<template>
  <div class="password">
    <article>
      <div class="heading">修改密码</div>
      <div class="row">
        <div class="md-5">
          <span style="width:49.1px;"></span>原密码：
          <div class="md-6">
            <el-input
              type="text"
              placeholder="请输入旧密码"
              v-model="former"
              maxlength="16"
              oninput="value=value.replace(/[\W]/g,'')"
              onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"
              show-password
            ></el-input>
          </div>
          <div class="text">
            <i class="el-icon-error" v-if="formerText">&ensp;</i>
            {{formerText}}
          </div>
        </div>
        <div class="md-5">
          <span style="width:49.1px;"></span>新密码：
          <div class="md-6">
            <el-input
              type="text"
              placeholder="请输入新密码"
              v-model="novo"
              maxlength="16"
              :show-word-limit="true"
              oninput="value=value.replace(/[\W]/g,'')"
              onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"
            ></el-input>
          </div>
          <div class="text">
            <i class="el-icon-error" v-if="novoText">&ensp;</i>
            {{novoText}}
          </div>
        </div>
        <div class="md-5">
          再次输入密码：
          <div class="md-6">
            <el-input
              type="text"
              placeholder="请再次输入并确认密码"
              v-model="again"
              maxlength="16"
              oninput="value=value.replace(/[\W]/g,'')"
              onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"
              show-password
            ></el-input>
          </div>
          <div class="text">
            <i class="el-icon-error" v-if="againText">&ensp;</i>
            {{againText}}
          </div>
        </div>

        <div class="md-5">
          <span style="width:108.1px;"></span>
          <div class="md-6">
            <el-button type="primary" v-if="former&&novo&&again" @click="changePassword">修改密码</el-button>
            <!-- <el-button type="primary" @click="changePassword">修改密码</el-button> -->
            <el-button type="info" v-else disabled>修改密码</el-button>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import qs from "qs";

export default {
  name: "password",
  data() {
    return {
      former: "", //原密码
      novo: "", //新密码
      again: "", //第二次新密码
      formerText: "", //原密码错误文本
      novoText: "", //新密码错误文本
      againText: "", //第二次新密码错误文本
      password: ""
    };
  },
  methods: {
    changePassword() {
      let query = JSON.parse(sessionStorage.getItem("query")),
       id = query.id,
       novo = this.novo,
       _this = this;
      this.novoText =(novo.length)>=6?null:"请最少输入6位数";
      this.againText=this.again==this.novo?null:"两次输入密码必须一致";
      this.password = {
        id: id,
        old_password: this.former,
        new_password: this.novo
      };
      let passd = qs.stringify(this.password);

      if(!this.novoText&&!this.againText){
      this.axios
        .put("/api/admin/password/fpx", passd)
        .then(res => {
          console.log(res);
          let code = res.data.code;
          if (code == 110200) {
            sessionStorage.clear();
            _this.$router.push({
              path: "/"
            });
          }else{
            _this.formerText="请输入正确的原密码";
          }
        })
        .catch(err => {
          console.log(err)
           _this.$alert('修改失败，服务器无法连接','',{
            confirmButtonText: '确定',
            center:true,
            showClose:false
          })
        });}
    }
  }
};
</script>

<style lang="scss" scoped>
.password {
  display: flex;
  width: 100%;
}
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
      margin-bottom: 2rem;
      white-space: nowrap;
      line-height: 3rem;
      position: relative;
      .md-6 {
        width: 20rem;
      }
      button {
        width: 100%;
        height: 50px;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
    .text {
      position: absolute;
      bottom: -18px;
      line-height: normal;
      color: red;
      left: 7rem;
    }
  }
}
// .el-input {
//     height: 4rem;
//     border-radius: 15px;
//     font-size: x-large;
// }
</style>