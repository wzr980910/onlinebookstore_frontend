<template>
    <div class="container">
      <div class="register-bar">
        <div class="box">
          <h1>
            <img src="../assets/logo.png" class="logo">
            <span>小阅淘</span>
          </h1>          
        </div>
        <div class="register-tip">你好，欢迎注册</div>
      </div>
      <div class="register-box">
        <img src="../assets/welcome.jpg" class="left">
        <div class="register-form">
          <div class="title" >
            <strong>用户注册</strong>
            <div class="hr"></div>
          </div>
          <el-input class="username" placeholder="用户账号" v-model="username">
            <i slot="prefix" class="el-input__icon1 el-icon-user"></i>
          </el-input>
          <el-input class="phone_number" placeholder="手机号"  v-model="phone_number">
            <i slot="prefix" class="el-input__icon3 el-icon-phone-outline"></i>
          </el-input>
          <el-input class="password" type="password"  placeholder="密码"  v-model="password">
            <i slot="prefix" class="el-input__icon2 el-icon-lock"></i>
          </el-input>
          <div class="register-btn" @click="register">注册</div>
          <div class="login" @click="login">已有账号？去登录</div>
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
      register(){

      },
      login(){
        this.$router.push({
            name:'login'
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
  .register-bar{
    background-color:#be1313;
    width: 100%;
    height: 50px;
    padding: 5px 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
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
          font: normal 28px "STCaiyun",Cookie, Arial, Helvetica, sans-serif;
          padding: 0px 20px;
  }
  .logo{
          width: 55px;
          height: 45px;
  }
  .register-tip{
      font-size: 24px;
      font-weight: 500;
      color: #fff;
      font-family: Source Han Sans CN;
      position:absolute;
      right:35px ;
      top: 35px;
  }
  .register-box{
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
  .register-form{
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
    top:22px;
    width: 100%;
    height: 45px;
    text-align:center;
  }
  .el-input__icon1{
   position: absolute;
   left:110px;
   top:118px;
  }
  .el-input__icon2{
   position: absolute;
   left:110px;
   top:228px;
  }
  .el-input__icon3{
   position: absolute;
   left:110px;
   top:174px;
  }
  .register-btn{
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
    top:105px;
  }
  ::v-deep .phone_number .el-input__inner{
    background-color:#fff;
    text-align:center;
    border-color: #f1f2f5;
    color:#060606;
    width:310px;
    height: 40px;
    border-radius: 4px;
    position: absolute;
    right: 88px;
    top:160px;
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
  .login{
      font-size: 16px;
      color: #050505;
      position:absolute;
      right:33px ;
      top: 345px;
      cursor: pointer;
  }
  .login:hover{
    font-size: 18px;
    color: #e10c0c;
  }
  
    
  </style>