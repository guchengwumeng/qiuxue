<template>
  <div >
    <header>
      <div class="logo">图片待定</div>
      <div class="username">
        <i class="el-icon-user-solid"></i>
        <span>{{username}}</span>
        <i class="el-icon-switch-button" @click="quit"></i>
      </div>
    </header>

    <div class="box">
      <el-menu
        :default-active="qq"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="select"
        background-color="#53a8ff"
        text-color="#fff"
        active-text-color="#ffd04b"
        :unique-opened=true
        :router=true
      >
      <div v-for="(item,index) in welcome" :key="index.id">
        <el-submenu :index="String(item.sid)">
          <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span slot="title">{{item.name}}</span>
          </template>
          <div v-for="itme in item.welcomeChildren" :key="itme.id">
            <el-menu-item :index="itme.sid" :route="itme.route">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">{{itme.name}}</span>
            </el-menu-item>
          </div>
        </el-submenu>
      </div>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "homepage",
  data() {
    return {
      username: "",
      qq:"",    
      welcome:[]
    };
  },
  mounted(){
    this.qq=JSON.parse(sessionStorage.getItem("key"))||"1";
    let query=JSON.parse(sessionStorage.getItem("query"));
    this.username=query.name;
    // let id="5";
    let id=query.id;
    let _this=this;
this.axios.get(`/api/admin/welcome/fpx/${id}`)
.then(res=>{
  console.log(res)
  // console.log(res.data.data.children)
_this.welcome=res.data.data.children;
console.log("we",_this.welcome)

})
.catch(ree=>{
console.log(ree)
this.$message.error("服务器连接不上，无法渲染数据！")
})

  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    select(key,keyPath){
  console.log(key);
  // 保存选取状态
  sessionStorage.setItem("key",JSON.stringify(key));
    },
    quit(){
      // 退出清除所有数据
      sessionStorage.clear();
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style lang="scss" scoped>

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  background-color: #409eff;
  .logo {
    width: 80px;
    height: 60px;
    border: 1px solid #333;
    margin-left: 20px;
    text-align: center;
  }
  .username {
    margin-right: 20px;
    display: inherit;
    i {
      font-size: 25px;
      font-weight: bold;
    }
    span {
      margin: 0 10px;
    }
  }
}
.el-menu-vertical-demo {
  width: 250px;
}
.el-menu-item i {
  color: inherit;
}
.box {
  display: flex;
  min-height: 92vh;
}
</style>