<template>
    <div class="bookDetails">
        <el-breadcrumb style="margin-bottom: 20px;" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品详情</el-breadcrumb-item>
         
        </el-breadcrumb>
        <el-row>
            <el-col :span="10">
                <div class="grid-content">
                    <div class="demo-image__preview">

                        <el-image style="width: 300px; height:400px" :src="require('@/assets/11.jpg')">

                        </el-image>
                    </div>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content">
                    <el-row>
                        <el-descriptions :column="1">
                            <el-descriptions-item label="名称">《IU写真》</el-descriptions-item>
                            <el-descriptions-item label="作者">天晓峰</el-descriptions-item>
                            <el-descriptions-item label="出版时间">{{ bookInfo.publish_date }}</el-descriptions-item>
                            <el-descriptions-item label="页数">{{ bookInfo.pages }}</el-descriptions-item>
                            <el-descriptions-item label="单价（元）">{{ bookInfo.price }}</el-descriptions-item>
                            <el-descriptions-item label="内容提要">{{ bookInfo.content }}</el-descriptions-item>
                        </el-descriptions>
                    </el-row>

                    <el-row style="margin-top: 10%;">

                        <el-input-number style="margin-right: 40px;" v-model="num" @change="handleChange"
                            :min="0"></el-input-number>
                        <el-button plain type="danger" icon="el-icon-shopping-cart-full"
                            @click="showCar()">加入购物车</el-button>
                        <el-button plain type="danger" icon="el-icon-view" @click="openLink">在线预览</el-button>
                        <el-button plain type="danger" icon="el-icon-check" @click="sayHello">立即购买</el-button>

                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from 'axios';
import { myMixin } from '@/methods/method.js';

export default {
    mixins: [myMixin],
    name: "BookDetails",
    data() {
        return {
            id: '',           //图书id
            bookInfo: {},     //图书详细信息
            coverUrl: '',      //图书封面地址
            rel: '',
            num: 1
        };
    },
    methods: {
        openLink() {
            window.open('https://www.baidu.com/s?tn=44004473_8_oem_dg&ie=utf-8&wd=iu%E5%86%99%E7%9C%9F');
        },
        handleChange(value) {
            console.log(value);
        },

        //获取图书列表详情
        getBookDetails() {
            axios.post("/getBookDetails", {
                id: this.$route.query.id
            }).then((res) => {
                if (res.data.statusCode == 200) {
                    //将获取的书籍详细信息装入bookInfo
                    this.bookInfo = res.data.content.message
                    //使用require避免webpack编译后图片地址改变而造成图片无法显示的情况
                    // this.coverUrl = this.bookInfo.picture ? require('../assets/cover/' + this.bookInfo.picture) : ''
                } else {
                    return this.$message.error(res.data.statusMessage)
                }
            }).catch((error) => {
                return this.$message.error("获取图书详情失败：" + error)
            })
        },
        showCar() {
            axios.post("/addCarBook", {
                id: this.$route.query.id
            }).then((res) => {
                if (res.data.statusCode == 200) {
                    this.rel = res.data.content.message
                    this.$router.push({
                        name: 'car',

                    })
                } else {
                    return this.$message.error(res.data.statusMessage)
                }
            }).catch((error) => {
                return this.$message.error("获取图书详情失败：" + error)
            })
            this.refreshPage = true;

        }
    },
    filters: {
        //过滤显示后端传入数据图片地址信息
        filterImg(item) {
            if (typeof item === "string") {
                return item.split("|");
            } else {
                return item
            }
        },
    },
    mounted() {
        //页面加载时发送请求数据
        this.getBookDetails()
    }
}
</script>

<style scoped>
.bookDetails {
    padding: 25px;
    background: white;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
    width: 80%;
    text-align: center;
    margin: auto;
    border-radius: 10px;
}

.coverImg {
    width: 400px;
    height: 480px;
}
</style>