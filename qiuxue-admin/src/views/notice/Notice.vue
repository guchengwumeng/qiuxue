<template>
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
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="title" label="名称" width="80"></el-table-column>
        <el-table-column prop="createBy" label="创建人"></el-table-column>
        <el-table-column prop="createAt" label="创建时间"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" size="mini" type="success">编辑</el-button>
            <el-button @click="remove(scope.row)" size="mini" type="success">删除</el-button>
            <el-button size="mini" type="success">上线</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "notice",
  data() {
    return {
      tableData: [
        {
          id: "",
          title: "",
          createBy: "",
          createAt:"",
          status:""
        }
      ]
    };
  },
  created() {
    this.list()
  },
  methods: {
    //列表
    list(){
      let aptd =
        "api/admin/notice/fpx";

      axios.get(aptd).then(res => {
        console.log(res);
        // this.tableData=res.data
        console.log(this.tableData)
      });
    },
    //编辑
    edit(row) {
      this.$confirm("是否删除此条公告, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          console.log(row.id);
          console.log(row.status);
          this.$router.push({ path: "/editnotice" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    //新增
    add() {},
    //删除
    remove(row) {
      this.$confirm("是否删除此条公告, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          console.log(row.id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
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