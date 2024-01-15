<template>
  <div class="container">
    <div class="login-bar"></div>
    <div class="login-box">
      <img src="../assets/welcome.jpg" class="left" width="600px" >
      <div class="login-form">
        <div class="title">
          <strong>用户登录</strong>
          <div class="hr"></div>
        </div>
        <div class="form1"> 
          <el-input class="username" placeholder="用户名" v-model="username">
          </el-input>
        </div>
        <div class="form2">  
          <el-input class="password" type="password" suffix-icon="el-icon-lock" placeholder="密码"  v-model="password">
          </el-input>
        </div>
        <a class="login-btn" href="/home">登录</a>


  
      </div>
    </div>
    
    

  </div>    
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
     username:"",
     password:"",
     
    }
  },
  methods:{
    
  }
}

</script>
<style scoped>
.container{
 background-color:#ffffff;
 padding: 20px 20px 20px 20px;
 font-size:30px;
}
.login-bar{
  background-color: #e83f3f;
  width: 100%;
  height: 65px;
  padding: 5px 0px;
}
.login-box{
  background:rgb(252, 245, 245);
  width:100%;
  height:465px;
  padding:65px 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.left{
  position: absolute;
  left:150px;
  border-radius: 4px;
  /* width:450px; */
  height:388.88px ;
}
.login-form{
  position: absolute;
  background: #fff;
  width: 500px;
  height: 388.88px;
  right: 150px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 4px;
}
.hr{
  width:100%;
  border-top: 1px solid #b0b0b0;
  -webkit-transform: scaleY(.2);
  transform: scaleY(.2);
  margin-top: 18px;
}
.title{
  background: #fff;
  position: absolute;
  top:40px;
  width: 100%;
  height: 45px;
}
.form1{
  background: #fff;
  position: absolute;
  top:125px;
  width: 100%;
  height: 45px;
  margin: 20px;
}
.form2{
  background: #fff;
  position: absolute;
  top:210px;
  width: 100%;
  height: 45px;
  margin: 20px;
}
.login-btn{
    padding-top: 5px;
    width: 315px;
    height:40px;
    color:#fff;
    font-size: 15px;
    text-align: center;
    border-radius: 4px;
    background-color: #c4261d;
    position: absolute;
    top:310px;
}
::v-deep .username .el-input__inner{
  background-color:#fff;
  text-align:center;
  border-color: #f1f2f5;
  color:#060606;
  width:310px;
  height: 40px;
  border-radius: 4px;
}
::v-deep .password .el-input__inner{
  background-color:#fff;
  text-align:center;
  border-color: #f1f2f5;
  color:#060606;
  width:310px;
  height: 40px;
  border-radius: 4px;
}

  
</style>