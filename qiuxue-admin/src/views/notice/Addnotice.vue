<template>
  <div class="box">
    <div class="box2">
      <div class="box3">{{add}}</div>
      <div style="padding: 68px 204px;">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item class="xxx" label="内容">
            <div class="applyInput">
              <textarea
                style="width: 77%;
                       border-radius: 7px;
                       height: 21vh;
                       padding: 20px;"
                placeholder="请输入"
                maxlength="90"
                @input="descInput"
                v-model="form.content"
              />
              <div class="numberV">
                <div></div>
                <div></div>
                <div>{{txtVal}}/90</div>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-if="form.title&&form.content" @click="onSubmit()">保存</el-button>
            <el-button type="info" v-else disabled>保存</el-button>
            <el-button @click=" cancel()">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
import axios from "axios";
export default {
  data() {
    return {
      txtVal: 0,
      desc: "",
      add: "",
      form: {
        title: "",
        content: ""
      }
    };
  },
  created() {
    this.start();
  },
  methods: {
    descInput() {
      console.log(this.form.content.length);
      this.txtVal = this.form.content.length;
    },
    start() {
      let status = this.$route.query.status;
      console.log(status);
      if (status == 1) {
        this.add = "公告编辑";
        let id = this.$route.query.id;
        console.log(typeof id);
        axios.get("api/admin/notice/fpx/" + id).then(res => {
          console.log(res.data.data);
          this.form.title = res.data.data.title;
          this.form.content = res.data.data.content;
          this.descInput();
        });
      } else {
        this.add = "公告新增";
      }
    },
    onSubmit() {
      let status = this.$route.query.status;
      console.log(status);
      if (status == 1) {
        let id = this.$route.query.id;
        let data = {
          title: this.form.title,
          content: this.form.content
        };
        console.log(typeof data);
        let newdata = qs.stringify(data);
        axios.put("api/admin/notice/fpx/" + id, newdata).then(res => {
          console.log(res);
          this.$router.push({ path: "/notice" });
        });
      } else {
        console.log("xxx")
        let data = {
          title: this.form.title,
          content: this.form.content,
          status:0
        };
        let newdata = qs.stringify(data);
        axios.post("/api/admin/notice/fpx", newdata).then(res => {
          console.log(res);
          this.$router.push({ path: "/notice" });
        });
      }
    },
     cancel(){
       this.$router.push({ path: "/notice" });
     }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  .box2 {
    width: 96%;
    border: 1px solid;
    margin: 7% 2%;
    .box3 {
      background: #eef1f6;
      padding: 15px 20px;
    }
  }
}
.numberV {
  margin-top: -47px;
  margin-left: 74%;
  outline: none !important;
}
</style>