<template>
<div class="banner">
<div class="main">
    <div class="header">
        <h2>banner轮播图</h2>
        <el-button type="primary" size="mini" @click="add">+新增</el-button>
    </div>
    <div class="banner-body">
    <table  border="1" cellpadding="10">
        <thead>
            <tr>
                <th>ID</th>
                <th>名称</th>
                <th>创建人</th>
                <th>创建时间</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in banner" :key="index">
                <th>{{index+1}}</th>
                <th>{{item.title}}</th>
                <th>{{item.creat_by}}</th>
                <th>{{item.creat_at}}</th>
                <th>{{item.status | statusFilters}}</th>
                <th>
                    <el-button type="primary" size="mini" @click="state(item.status)">{{item.status | operationFilters}}</el-button>
                    <el-button type="primary" size="mini" v-if="display(item.status)" @click="redact(index+1)">编辑</el-button>
                    <el-button type="primary" size="mini" v-if="display(item.status)" @click="cancel">删除</el-button>
                </th>
            </tr>
        </tbody>
    </table>
    </div>
</div>
</div>
</template>
<script>
import axios from "axios";
export default {
    name:"banner",
    data(){
        return{
            banner:[{title:"活动七折",creat_by:"还魂的酒",creat_at:"2019.8.15~15:15",status:"0"},
            {title:"活动二折",creat_by:"山鬼仙人",creat_at:"2019.3.15~15:15",status:"1"},
            {title:"活动四折",creat_by:"風繼續吹",creat_at:"2019.4.15~15:15",status:"1"},
            {title:"活动半价",creat_by:"终究是客",creat_at:"2019.5.15~15:15",status:"0"},
            {title:"活动八折",creat_by:"柠檬加醋",creat_at:"2019.2.15~15:15",status:"1"},
            {title:"活动九折",creat_by:"温言如故",creat_at:"2019.11.15~15:15",status:"1"},
            {title:"活动六折",creat_by:"七里伊人",creat_at:"2019.7.15~15:15",status:"0"},
            {title:"活动五折",creat_by:"超A女孩",creat_at:"2019.8.15~15:15",status:"1"},
            {title:"活动三折",creat_by:"欲涩南客",creat_at:"2019.9.15~15:15",status:"0"},
            {title:"活动一折",creat_by:"猫鱼薄荷",creat_at:"2019.10.15~15:15",status:"0"}],
     
        }
    },
    created(){
        let  alert=this.$route.query.alert;
        axios.get("/api/admin/banner/fpx")
        .then(res=>{
            console.log("1",res)
            console.log(res.data)
        })
        .catch(rtt=>{
        console.log("2",rtt)
        })

    if(alert){
        // 新增、编辑页面跳转回来消息提示
        this.$message({
            type: "success",
            message: alert+"成功"
          });
    }


        

    },
    filters:{
        statusFilters(status){
    if (status == 0) {
        return "下架";
      } else if (status == 1) {
        return "上架";
      }
        },
        timeFilters(){

        },
        operationFilters(status){
    if (status == 0) {
        return "上架";
      } else if (status == 1) {
        return "下架";
      }
        }
    },
    methods:{
        add(){
            this.$router.push({
                path:"/addbanner",
                query:{
                    title:"新增"
                }
            })
        },
        display(status){
            // 状态为下架隐藏按钮
            // console.log(status);
        let b=status==1?false:true;
        return b;
        },
        state(status){
            // 上下架
        console.log(status)
        let aa=status==0?'上架':'下架';

        this.$confirm('是否'+aa+'该轮播图',"提示",{
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type:"warning",
            center:true,
            showClose:false,
            closeOnClickModal:false           
        })
        .then(()=>{
            this.$message({
                type:"success",
                message:aa+'成功！'
            })
        })

        },
        redact(id){
            // 编辑
            console.log(id)
            this.$router.push({
                path:"/addbanner",
                query:{
                    title:"编辑",
                    id:id
                }
            })
        },
        cancel(){
            // 删除
        this.$confirm("是否删除该轮播图","警告",{
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type:"warning",
            center:true,
            showClose:false,
            closeOnClickModal:false 
        })
        .then(()=>{
            this.$message({
                type:"success",
                message:'删除成功！'
            })
        })



        }

    }
}
</script>
<style lang="scss" scoped>

.banner{
    display: flex;
    width: 100%;
}

.main{
    margin:3rem 1rem;
    width: 100%;
    border:1px solid #333;
    background-color:#fff;
    .header{
        display:flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 3rem;
        border-bottom:1px solid #333;
        >*{
            margin:0 20px;
        }
    }
    .banner-body{
        margin:15px;
    table{
        
        width: 100%;
        font-family:cursive;
        // border:1px solid #ffffff;
         border-collapse: collapse;
         border-color:#797979; 
    thead{
        background-color:#d7d7d7;
    }

    }}
}


</style>