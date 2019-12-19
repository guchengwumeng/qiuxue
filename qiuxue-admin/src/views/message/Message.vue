<template>
  <div style="width: 100%;">
    <div class="main">
      <div class="first-row" style="justify-content: space-between;">
        <!-- 标题 -->
        <div class="username">
          <span class="demonstration">推送标题：</span>
          <el-input v-model="messagename" placeholder="请输入消息名称"></el-input>
        </div>
        <!-- 推送人 -->
        <div class="username">
          <span class="demonstration">&emsp;推送人：</span>
          <el-input v-model="messagename" placeholder="请输入消息名称"></el-input>
        </div>
        <!-- 时间选择器 -->
        <div class="registered" style="margin-top:20px">
          <span class="demonstration">推送时间：</span>
          <el-date-picker
            v-model="start"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
          <span class="splitter">—</span>
          <el-date-picker
            v-model="end"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
      </div>
      <div class="first-row">
        <!-- 年纪下拉框 -->
        <div class="grade" style="margin-top:20px">
          <span class="demonstration">推送年级：</span>
          <el-select v-model="push" placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <!-- 状态 -->
        <div class="grade" style="margin-top:20px">
          <span class="demonstration">&ensp;&emsp;&emsp;&emsp;状态：</span>
          <el-select v-model="status" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <!-- 重置搜索按钮 -->
      <div class="first-row" style="justify-content: flex-end;">
        <el-button
          @click="reset"
          type="primary"
          icon="el-icon-delete"
          style="background: #d9534f;border-color: #d43f3a;"
        >重置</el-button>
        <el-button
          @click="search"
          type="primary"
          icon="el-icon-search"
          style="background: #5cb85c;border-color: #4cae4c"
        >搜索</el-button>
      </div>
    </div>

    <div class="box">
      <div class="box2">
        <div class="box3">
          公告列表
          <el-button @click="add()" class="xxx" type="primary">+新增</el-button>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 96%;margin:2%;"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column align="center" prop="id" label="ID"></el-table-column>
          <el-table-column align="center" prop="name" label="消息标题"></el-table-column>
          <el-table-column align="center" prop="push_name" label="推送人"></el-table-column>
          <el-table-column align="center" prop="push_style" label="推送方式"></el-table-column>
          <el-table-column align="center" prop="push_time" label="推送时间"></el-table-column>
          <el-table-column align="center" prop="push_class" label="推送年级"></el-table-column>
          <el-table-column align="center" prop="status" label="状态"></el-table-column>
          <el-table-column align="center" label="操作" width="250">
            <template slot-scope="scope">
              <el-button
                v-if="display(scope.row)"
                @click="edit(scope.row)"
                size="mini"
                type="success"
              >立即推送</el-button>
              <el-button @click="remove(scope.row)" size="mini" type="success">删除</el-button>
              <el-button @click="examine(scope.row)" size="mini" type="success">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "message",
  data() {
    return {
      //消息名称
      messagename: "",
      //状态
      status: "",
      //推送年级
      push: "",
      //推送时间
      start: "",
      end: "",
      //消息列表
      tableData: [
        {
          id: "",
          name: "",
          push_name: "",
          push_style: "",
          push_time: "",
          push_class: "",
          status: ""
        }
      ],
      //状态下拉框
      options: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "未推送",
          label: "未推送"
        },
        {
          value: "已推送",
          label: "已推送"
        }
      ],
      options1: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "1",
          label: "初一"
        },
        {
          value: "2",
          label: "初二"
        },
        {
          value: "3",
          label: "初三"
        },
        {
          value: "4",
          label: "高一"
        },
        {
          value: "5",
          label: "高二"
        },
        {
          value: "6",
          label: "高三"
        }
      ],
      //日期选择限制
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
    };
  },
  created() {
    this.list();
  },
  methods: {
    reset() {},
    search() {},
    //立即推送显示隐藏
    display(row) {
      // 状态为已推送隐藏按钮
      // console.log(status);
      let b = row.status == 1 ? false : true;
      return b;
    },
//列表
    list() {
      axios.get("api/admin/message/fpx").then(res => {
        console.log(res);
        this.tableData = res.data.data.items;
        // console.log(this.tableData);
        this.loading = false;
      });
    },
  }
};
</script>
<style lang="scss" scoped>
.el-input {
  width: auto;
}
.main {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 0 20px;
  .first-row {
    display: flex;
    align-items: center;
    padding: 10px 0px;
    flex-wrap: wrap;
    .registered {
      margin: 0 !important;
      .splitter {
        margin: 0 20px;
      }
    }
    .demonstration {
      margin: 0 5px 0 0;
    }
  }
}
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  .box2 {
    width: 96%;
    border: 1px solid;
    margin: 2%;
    .box3 {
      border-bottom: 1px solid;
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      .xxx {
        padding: 5px;
        font-size: 10px;
      }
    }
  }
}
</style>