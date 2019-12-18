<template>
  <article>
    <div class="heading">banner{{ title}}</div>
    <div class="row">
    <div class="form-group">
      <label class="md-4">名称<b v-if="name==''">&#10045;</b></label>
      <div class="md-8">
        <el-input v-model="name" placeholder="轮播图名称" maxlength="10"></el-input>
      </div>
    </div>
    <div class="form-group">
      <label class="md-4">ID<b v-if="id==''">&#10045;</b></label>
      <div class="md-8">
        <el-input v-model="id" placeholder="课程ID"></el-input>
      </div>
    </div>
    <div class="form-group">
      <label class="md-4">图片<b v-if="img==''">&#10045;</b></label>
      <div class="md-12">
      <label for="file" class="file" v-if="img==''"><div class="le"></div></label>
      <img :src="img" @click="typefile"/>
      <input type="file" id="file" style="display:none" accept="image/png, image/jpeg, image/gif, image/jpg" @change="upload"/>
      </div>
    </div>
    <div class="form-group">
        <div class="md-4"></div>
      <el-button type="primary" @click="cancel">取消</el-button>
      <el-button type="primary" v-if="name&&id&&img" @click="save(id)">保存</el-button>
      <el-button type="info" v-else disabled>保存</el-button>
    </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "addbanner",
  data() {
    return {
      title: "",
      name:"",
      id:"",
      img:""
    };
  },
  mounted(){
      let id=this.$route.query.id;
      this.title=this.$route.query.title;
      
      if(id){
          this.axios.get(`/api/course/fpx/${id}`)
          .then(function(res){
        console.log("发起请求",res)
          })
          .catch(function(rtt){
        console.log("2",rtt)
        })
      }
    
  },
  methods: {
      upload(event){
          console.log(event);
          let file=event.target.files[0];
          console.log(file)
            //    reads=new FileReader();
        //    console.log(file)
        //    reads.readAsDataURL(file);
        //    console.log(reads);
        //    reads.onload=function(){
        //     //    this.img=URL.createObjectURL(file);
        //     // this.img=this.result;
        //     // console.log(this.result)
        //     let fileData=new FormData();
        //         fileData.append("file",file);
        //         console.log(fileData);
        //    }
this.img=URL.createObjectURL(file);
console.log(this.img);
      },
      typefile(){
        //   点击图片触发选择图片事件
          ($("#file").click());   
      },
      cancel(){
        // 取消

      },
      save(id){
        // 保存
console.log(id)
    let aa=33;
    let bb=this.$route.query.id;
    let title=this.$route.query.title;
  if(id!=33&&bb){
  this.$alert("请输入正确的课程ID",{
    confirmButtonText:"确认",
    center:true,
    showClose:false,
   closeOnClickModal:false

  })
  }else{
        this.$router.push({path:"/banner"})
        this.$router.push({
                path:"/banner",
                query:{
                    alert:title    
                }
            })

  }
     




        // this.$router.push({
        //   path:"/banner"
        // })
      }




  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
@media screen and (min-width:1500px){
img{
  width: auto;
  height: 30rem;
}
}
article {
  margin: 3rem 1rem;
  width: 100%;
  border: 1px solid #ddd;
  background-color: #fff;
  .heading {
    padding: 1rem 2rem;
    font-size:25px;
    background-color:#f5f5f5;
    border-bottom: 1px solid #ddd;
    margin-bottom:5rem;
  }
}

b{
    color:#c9302c;
    font-size: small;
}
.md-12{
    width: 75%;
}
img{
    display:block;
    max-width: 60%;
    
}
.row{
    display:flex;
    flex-direction: column;
    .form-group{

        display:flex;
        width: 100%;
        padding: 0 15px;
        margin-bottom: 20px;
        .md-4{
        float:left;
        width: 25%;
        text-align: right;
        padding-right: 30px;
    }
    .md-8{
        
        float:left;
        width: 50%;
    }
        .file{
            width: 20rem;
            height: 12rem;
            border:1px solid #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            position:relative;
            .le{
                width: 15rem;
                border:2px solid #ddd;
                &::before {
                    content:"";
                    position:absolute;
                    top: 30px;
                    left: 154px;
                    height: 8rem;
                    border:2px solid #ddd;
                }
            }
        }
    }
    .disable{
        background-color:#c8c9cc;
        border-color:#c8c9cc;
        cursor: not-allowed;
    }
    
}
</style>