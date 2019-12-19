<template>
  <div id="article">
    <div id="search">
      <el-row>
        <el-col :md="7" style="display: flex;">
          <el-col :md="7" style="fone-size: 14px;">课程名称：&ensp;</el-col>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :md="7" style="display: flex;">
          <el-col :md="7" style="fone-size: 14px;">年级：&ensp;</el-col>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :md="10">
          <el-col :md="12">
            <el-col :md="10" style="fone-size: 14px;">创建时间：&ensp;</el-col>
            <el-date-picker
              id="input"
              v-model="value1"
              placeholder="请输入内容"
              class="homePage"
              type="datetime"
              value-format="timestamp"
              default-time="00:00:00"
            ></el-date-picker>
          </el-col>
          <el-col :md="12">
            <el-col :md="10">—</el-col>
            <el-date-picker
              align="right"
              v-model="value2"
              placeholder="请输入内容"
              type="datetime"
              value-format="timestamp"
              default-time="00:00:00"
            ></el-date-picker>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="7" style="display: flex;">
          <el-col :md="7" style="fone-size: 14px;">&emsp;&emsp;类型：&ensp;</el-col>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :md="7" style="display: flex;">
          <el-col :md="7" style="fone-size: 14px;">状态：&ensp;</el-col>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :md="10" style="text-align: end;">
          <el-button type="primary" plain>搜索</el-button>
          <el-button type="primary" plain>重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="list">
      <div class="listBar">
        <span>Article列表</span>
        <span>
          <router-link to="/increase">
            <el-button type="primary">+新增</el-button>
          </router-link>
        </span>
      </div>
      <div class="listContent">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>名称</th>
              <th>类型</th>
              <th>年级</th>
              <th>科目</th>
              <th>创建人</th>
              <th>创建时间</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <!--info是Information的缩写-->
            <tr v-for="news in listInfo" :key="news.b">
              <td>{{news.id}}</td>

              <td>{{news.title}}</td>
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
  data() {
     return {
      // searchCont： "",
      id:"",
      title: '',     
      options: "",
      input: "",
      value: "",
      value1: "",     
      value2: "" , 
        istInfo: [],
    };
  
  },
methods:{
   getRequest(){
                axios.get('/api/admin/course/fpx'
                ).then(
                    (response) => {
                        console.log(response)
                        console.log(response.data)
                        this.listInfo=response.data;


                        
                    
                    })
            },
},
   mounted(){     
            this.getRequest();
        },
      
}
</script>
<style scoped lang="scss">
#article {
  width: 100%;
  height: 100vh;
  padding: 30px;
  // background-color: #f5f5f5;
  #search {
    padding: 15px 15px 0 15px;
    border: 1px solid #bfbaba;
    // background-color: #d7d7d7;
    border-radius: 4px;
    background-color: #f5f5f5;
    .el-row {
      padding: 0 0 15px 0;
      min-height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .el-select {
      width: 58%;
    }
    .el-input {
      width: 58% !important;
      outline: none !important;
      // border: #111 solid 1px!important;
      border-radius: nome !important;
    }
    button {
      padding: 10px 16px;
    }
  }
  #list {
    border: 1px solid #ddd;
    margin-top: 20px;
    background: #fff;
    font-size: 14px;
    .list-info-choose {
      span {
        padding: 0 10px;
        cursor: pointer;
      }
    }
    .listBar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 15px;
      border-bottom: 1px solid #ddd;
      background-color: #f5f5f5;
    }
    span {
      padding: 0 20px;
    }

    button {
      padding: 3px;
      background-color: #5cb85c;
    }
    .listContent {
      padding: 20px;
      table {
        width: 100%;
        border: 1px solid #ddd;
        border-collapse: collapse;
      }
      th {
        height: 2rem;
        width: 400px;
      }
      table > tbody > tr > td > {
        padding: 8px;
        line-height: 1.42857143;
        border-top: 1px solid #ddd;
      }
      .list-info {
        border: 1px solid #ddd;
      }
    }
  }
}
</style>