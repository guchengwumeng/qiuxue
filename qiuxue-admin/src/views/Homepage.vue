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
      <div v-for="(item,index) in data" :key="index.id">
        <el-submenu :index="item.index">
          <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span slot="title">{{item.name}}</span>
          </template>
          <div v-for="chidren in item.chidren" :key="chidren.id">
            <el-menu-item :index="chidren.index" :route="chidren.route">
           <i class="el-icon-edit-outline"></i>
          <span slot="title">{{chidren.name}}</span>
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
      username: "admin",
      qq:"",
      data: [{name:"欢迎页",index:"1",chidren:[{name:"欢迎页",index:"1",route:"/welcome"}]},
      {name:"banner管理",index:"2",chidren:[{name:"banner管理",index:"2",route:"/banner"}]},
      {name:"公告管理",index:"3",chidren:[{name:"公告管理",index:"3",route:"/notice"}]},
      {name:"课程管理",index:"4",chidren:[{name:"课程管理",index:"4",route:"/course"}]},
      {name:"消息管理",index:"5",chidren:[{name:"消息管理",index:"5",route:"/message"}]},
      {name:"后台管理",index:"6",
      chidren:[{name:"模块管理",index:"6-1",route:"/module"},
                                        {name:"角色管理",index:"6-2",route:"/role"},
                                        {name:"后台用户管理",index:"6-3",route:"/id"},
                                        {name:"修改密码",index:"6-4",route:"/password"}]},
                                        {name:"用户管理",index:"7",chidren:[{name:"用户管理",index:"7",route:"/user"}]}
      ]
    };
  },
  mounted(){
    this.qq=JSON.parse(sessionStorage.getItem("key"))||1;
    console.log(this.qq)


  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    select(key,keyPath){
console.log(key, keyPath);
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
  height: 92vh;
}
</style>