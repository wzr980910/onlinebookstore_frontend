<template>
    <div>
        <div class="header">
            <div class="box">
                <h1>
                    <img src="../assets/logo.png">
                    <span>小阅淘</span>
                </h1>
                <nav>
                    <router-link active-class="active" to="/home">首页</router-link>
                    <router-link active-class="active" to="/cart">购物车</router-link>
                    <router-link active-class="active" to="/indent">订单</router-link>
                </nav>
            </div>
            <div class="box">
                <input class="text" type="text" placeholder="请输入关键词~~~" name="search">
                <input class="button" type="button" value="搜索">
                <a href="/person_center">
                    <el-tooltip  class="item" effect="light" content="个人中心" placement="bottom">
                    <img src="../assets/portrait.png" alt="个人中心">
                </el-tooltip>
                </a>

                <nav>
                    <router-link active-class="active" to="/login">登录</router-link>
                    <!-- <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom"> -->
      
                    <a>注册</a>
                </nav>
            </div>
        </div>
        <!-- <div class="contents">
            <div class="content">
                指定组件的位置
                <router-view></router-view>
            </div>
        </div> -->

    </div>
</template>

<script>
export default {
    name: "BBSHeader"
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background-color: #be1313;
    color: #ffffff;

    /*吸顶效果*/
    /* position: sticky;
        position: -webkit-sticky;    !*兼容 -webkit 内核的浏览器*!
        top: 0px;                    !*必须设一个值，否则不生效*!*/

}

.box {
    display: flex;
    align-items: center;
}

h1 {
    display: flex;
    align-items: center;
    font: normal 28px "华文彩云", Cookie, Arial, Helvetica, sans-serif;
    padding: 0px 20px;
}

img {
    width: 40px;
    height: 40px;
}

nav {
    display: flex;
    align-items: center;
    margin: 0px 40px;
    font: 16px Arial, Helvetica, sans-serif;

}

nav a {
    padding: 0 15px;
    width: 70px;
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: normal;
    opacity: 0.9;
}

nav a:hover {
    opacity: 1;
}



/*搜索框*/

.text {
    height: 22px;
    font-size: 14px;
    border: 1px solid #ccc;
    padding: 3px 16px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
}

.text:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

.button {
    width: 60px;
    height: 30px;
    font-size: 14px;
    margin-right: 35px;
    border: 1px solid #ccc;
    background-color: #ebe81c;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.contents {
    display: flex;
    justify-content: center;
}

.content {
    display: flex;
    width: 1400px;
    height: 1400px;
    /*background-color: #f0f2f3;*/
}</style>