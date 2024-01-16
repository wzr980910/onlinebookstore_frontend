<template>
  <div class="container">
    <div class="login-bar">
      <div class="box">
        <h1>
          <img src="../assets/logo.png" class="logo">
          <span>小阅淘</span>
        </h1>          
      </div>
      <div class="login-tip">你好，欢迎登录</div>
    </div>
    <div class="login-box">
      <img src="../assets/welcome.jpg" class="left" >
      <div class="login-form">
        <div class="title" >
          <strong>用户登录</strong>
          <div class="hr"></div>
        </div>
        <el-input class="username" placeholder="用户账号" v-model="username">
          <i slot="prefix" class="el-input__icon1 el-icon-user"></i>
        </el-input>
        <el-input class="password" type="password"  placeholder="密码"  v-model="password">
          <i slot="prefix" class="el-input__icon2 el-icon-lock"></i>
        </el-input>
        <div class="login-btn" @click="login">登录</div>
        <div class="register" @click="register">没有账号？去注册</div>
      </div>
    </div>
  </div>    
</template>
<script>
// import axios from 'axios'

export default {
  data() {
    return {
     username:"",
     password:"",
     
    }
  },
  methods:{
    login(){

    },
    register(){
      //点击去注册按钮，路由带参跳转
      this.$router.push({
        name:'register',
      })
    }
    
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
  background-color:#be1313;
  width: 100%;
  height: 50px;
  padding: 5px 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  box-shadow: 5px 5px 8px rgba(241, 134, 134, 0.5);
}
.box{
        width: 200px;
        height: 50px;
        align-items: center;
        position: absolute;
        left: 8px;
}
h1{
        display: flex;
        align-items: center;
        font: normal 28px "华文彩云",Cookie, Arial, Helvetica, sans-serif;
        padding: 0px 20px;
}
.logo{
        width: 55px;
        height: 45px;
}
.login-tip{
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    font-family: Source Han Sans CN;
    position:absolute;
    right:35px ;
    top: 35px;
}
.login-box{
  background:rgb(252, 245, 245);
  width:100%;
  height:500px;
  padding:65px 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  flex-direction: row;
  box-shadow: 5px 5px 10px rgba(241, 134, 134, 0.5);
}
.left{
  position: absolute;
  left:150px;
  border-radius: 4px;
  height:388.88px ;
  width:600px;
  box-shadow: 5px 5px 8px rgba(241, 134, 134, 0.5);
}
.login-form{
  position: absolute;
  background: #fff;
  width: 500px;
  height: 388.88px;
  right: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 5px 5px 8px rgba(241, 134, 134, 0.5);
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
  text-align:center;
}
.el-input__icon1{
 position: absolute;
 left:110px;
 top:163px;
}
.el-input__icon2{
 position: absolute;
 left:110px;
 top:228px;
}
.login-btn{
    padding-top: 5px;
    width: 310px;
    height:40px;
    color:#fff;
    font-size: 22px;
    text-align: center;
    border-radius: 4px;
    background-color: #c4261d;
    position: absolute;
    top:285px;
    right: 90px;
}
::v-deep .username .el-input__inner{
  background-color:#fff;
  text-align:center;
  align-content: center;
  border-color: #f1f2f5;
  color:#060606;
  width:310px;
  height: 40px;
  border-radius: 4px;
  position: absolute;
  right: 88px;
  top:150px;
}
::v-deep .password .el-input__inner{
  background-color:#fff;
  text-align:center;
  border-color: #f1f2f5;
  color:#060606;
  width:310px;
  height: 40px;
  border-radius: 4px;
  position: absolute;
  right: 88px;
  top:215px;
}
.register{
    font-size: 16px;
    color: #090909;
    position:absolute;
    right:33px ;
    top: 345px;
    cursor: pointer;
}
.register:hover{
  font-size: 18px;
  color: #e10c0c;
}

  
</style>