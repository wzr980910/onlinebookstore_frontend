<template>
    <div class="container">
        <aside class="aside">
            <h3>订单中心</h3>
            <h5>我的订单</h5>
            <h3>账户设置</h3>
            <h5>个人信息</h5>
            <h5>收货地址</h5>
            <h5>修改密码</h5>

        </aside>
        <div class="main">
            <div class="person">
                <el-descriptions title="用户信息">
                    <el-descriptions-item label="用户昵称" >sdnvvnvn</el-descriptions-item>
                    <el-descriptions-item label="用户账号">kooriookami</el-descriptions-item>
                    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                    <el-descriptions-item label="默认收货地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                </el-descriptions>
            </div>
            <div class="order">
                <div class="a">
                    <i slot="prefix" class="el-input__icon1 el-icon-bank-card"> 待付款</i>
                    <!-- <h2 >待付款</h2> -->
                    <h4>0</h4>
                </div>
                <div class="b">
                    <i slot="prefix" class="el-input__icon1 el-icon-box"> 待发货</i>
                    <!-- <h2>待发货</h2> -->
                    <h4>0</h4>
                </div>
                <div class="c">
                    <i slot="prefix" class="el-input__icon1 el-icon-office-building"> 待收货</i>
                    <!-- <h2>待收货</h2> -->
                    <h4>0</h4>
                </div>
                <div class="d">
                    <!-- <h2>全部订单></h2> -->
                    <i slot="prefix" class="el-input__icon2 el-icon-finished"> 全部订单></i>
                </div>
            </div>
            <div class="nothing"></div>
        </div>
    </div>
</template>
<script>

</script>
<style>
.container{
    width: 100%;
    height: 740px;
    background: #efeaea;
}
.aside{
    width: 180px;
    height: 600px;
    background:#fff;
    position: absolute;
    top: 80px;
    left:160px;
}
h3{
    font-size: 18px;
    color: #333;
    font-weight: 700;
    margin-top: 20px;
    margin-left: 45px;
}
h5{
    font-size: 14px;
    line-height: 32px;
    color: #333;
    font-weight: 300;
    margin-left: 45px;
}
.main{
    width: 980px;
    height: 600px;
    background: #fff;
    position: absolute;
    top: 80px;
    right:140px;
    display: flex;
    align-items: center;
    flex-direction: column; 
    gap:10px;
}
.person{
    width: 960px;
    height: 100px;
    margin-top: 15px;
}
.order{
    width: 980px;
    height: 100px;
    background: #efeaea;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
}
.el-input__icon1{
    font-size: 21px;
    line-height: 32px;
    color: #333;
    font-weight: 300;
    margin-left: 70px;
    margin-top:15px ;
}
.el-input__icon2{
    font-size: 21px;
    line-height: 32px;
    color: #333;
    font-weight: 300;
    margin-left: 60px;
    margin-top:25px ;
}
h4{
    font-size: 21px;
    color: #d50404;
    font-weight: 300;
    margin-top:0px;
    margin-left:105px; 
}
.a{
    width: 250px;
    height: 70px;
    background: #fff;
    border-right: 1px solid #b0a4a4;
}
.b{
    width: 250px;
    height: 70px;
    background: #fff;
    border-right: 1px solid #857e7e;
}
.c{
    width: 250px;
    height: 70px;
    background: #fff;
    border-right: 1px solid #857e7e;
}
.d{
    width: 250px;
    height: 70px;
    background: #fff;
}
.nothing{
    width: 100%;
    height: 360px;
    background: #dfb3b3;
}

</style>