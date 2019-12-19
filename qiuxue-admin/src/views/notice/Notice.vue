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
        <el-table-column align="center" prop="id" label="id"></el-table-column>
        <el-table-column align="center" prop="title" label="名称"></el-table-column>
        <el-table-column align="center" prop="createBy" label="创建人"></el-table-column>
        <el-table-column align="center" prop="createAt" label="创建时间"></el-table-column>
        <el-table-column align="center" prop="status" label="状态"></el-table-column>
        <el-table-column align="center" label="操作" width="250">
          <template slot-scope="scope">
            <el-button
              v-if="display(scope.row)"
              @click="edit(scope.row)"
              size="mini"
              type="success"
            >编辑</el-button>
            <el-button
              v-if="display(scope.row)"
              @click="remove(scope.row)"
              size="mini"
              type="success"
            >删除</el-button>
            <el-button
              v-if="scope.row.status == 0 "
              @click="putaway(scope.row)"
              size="mini"
              type="success"
            >上架</el-button>
            <el-button
              v-if="scope.row.status == 1 "
              @click="putaway(scope.row)"
              size="mini"
              type="success"
            >下架</el-button>
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
          createAt: "",
          status: ""
        }
      ]
    };
  },
  created() {
    this.list();
  },
  methods: {
    //列表
    list() {
      axios.get("api/admin/notice/fpx").then(res => {
        console.log(res.data.data);
        this.tableData = res.data.data;
        console.log(this.tableData);
        this.loading = false;
      });
    },
    //编辑删除显示隐藏
    display(row) {
      // 状态为下架隐藏按钮
      // console.log(status);
      let b = row.status == 1 ? false : true;
      return b;
    },
    //编辑
    edit(row) {
      this.$router.push({
        path: "/addnotice",
        query: {
          status: "1",
          id: row.id
        }
      });
    },
    //新增
    add() {
      let x = 0;
      this.$router.push({ path: "/addnotice" });
    },
    //上下架
    putaway() {
      this.$confirm("是否上下架此条公告, 是否继续?", "提示", {
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
    },
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
          axios.delete("api/admin/notice/fpx/" + row.id).then(res => {
            console.log(res);

            this.list();
          });
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