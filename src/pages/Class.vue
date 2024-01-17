<template>
    <div>
        <div class="containers">
            <div class="container">

                <div v-for="(row, rowIndex) in bookClassifyContent" :key="rowIndex">
                    <p class="li-tag">
                        <i :class="bookClassifyIcon[rowIndex]"></i>
                        <span class="bigclass">{{ bookClassifyTitle[rowIndex] }}</span>
                    </p>
                    <p class="li-tag">
                        <span v-for="(item, colIndex) in row" :key="colIndex" class="classifies">
                            <el-link>{{ item }}</el-link>
                        </span>
                    </p>
                </div>


                <div class="titlemagin">
                    <h2>对应分类</h2>
                    <hr class="hr">
                </div>

                <div>
                    <div class="product-container">

                        <div class="product-box" v-for="product in products" :key="product.name">
                            <img :src="product.img" :alt="product.name">
                            <h3>{{ product.name }}</h3>
                            <p>{{ product.description }}</p>
                            <a href="bookdetails">Buy Now</a>
                        </div>
                    </div>
                </div>


                <div class="pagination">
                    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="pageInfo.pageNow" :page-sizes="[5, 10, 15, 20]" :page-size="pageInfo.pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="pageInfo.totalBooks">


                    </el-pagination>

                </div>





            </div>
        </div>



    </div>
</template>


<script>

export default {
    data() {
        return {
            pageInfo: {
                pageNow: 1,     //当前页数
                pageSize: 10,   //每页显示的数据量
                totalBooks: 0    //总数据量
            },


            products: [
                {
                    img: require('@/assets/11.jpg'),
                    name: 'Product 1',
                    description: 'Description of Product 1'
                },
                {
                    img: require('@/assets/11.jpg'),
                    name: 'Product 2',
                    description: 'Description of Product 1'
                },
                {
                    img: require('@/assets/11.jpg'),
                    name: 'Product 3',
                    description: 'Description of Product 1'
                },
                {
                    img: require('@/assets/11.jpg'),
                    name: 'Product 4',
                    description: 'Description of Product 1'
                },

                {
                    img: require('@/assets/11.jpg'),
                    name: 'Product 6',
                    description: 'Description of Product 2'
                }
            ],



            bookClassifyContent: [
                ['文艺', '经济管理', '社科', '成功励志'],
                ['教材', '教辅', '考试', '外语', '音像'],
                ['儿童文学', '卡通绘本', '儿童科普', '启蒙教育', '益智游戏', '美术手工'],
                ['生活', '科技', '医学', '建筑']
            ],
            bookClassifyIcon: ['el-icon-office-building', 'el-icon-school', 'el-icon-guide', 'el-icon-cpu'],
            bookClassifyTitle: ['人文社科', '文教音像', '儿童读物', '生活科技']
        }
    }
}



</script>


<style scoped>
.container {
 
    width: 85%;
    height: auto;
    background: #fff;
    padding: 20px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);

}


.containers {
    display: flex;
    justify-content: center;

}

.li-tag {
    position: relative;
    overflow: hidden;
    height: 34px;
    line-height: 34px;
    margin-bottom: 8px;

    padding-right: 75px;
    font-size: 14px;
    background-color: #fff;

    border-bottom: 1px solid #888;
}

.li-tag i {
    margin-left: 5px;
}



.classifies {
    height: 28px;
    line-height: 28px;
    display: inline-block;
    margin-right: 8px;
    padding: 0 12px;
}

.bigclass {
    font: "仿宋";
    margin-left: 8px;

}

.titlemagin {
    height: 20px;
    margin-top: 10px;

    margin-bottom: 20px;
}

.titlemagin h2 {
    margin-left: 10px;
    margin-bottom: 5px;
}




.product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 15px;
    gap: auto; /*还没改完*/
}

.product-box {
    width: 200px;
    height: 360px;
    /* border: 1px solid #ccc; */
    padding: 20px;
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    /*transition: border-color 0.3s ease; */
    transition: 0.3s;
}

.product-box:hover {
    border: 1px solid #D21A1A;
    cursor: pointer;
    transform: translateY(-5px);

}

.product-box img {
    max-width: 100%;
    max-height: 100%;
    align-items: center;
}

.product-box h3 {
    margin-top: 5px;
}

.product-box p {
    color: #888;
    margin-bottom: 5px;
}

.product-box a {
    width: 80px;
    height: 20px;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    background-color: #29e63c;
    color: #fff;
    padding: 2px 4px;
    text-decoration: none;
    border-radius: 2px;
}


.hr {
    border: none;
    border-top: 2px solid red;
    margin-bottom: 10px;
}


.pagination {
    margin-top: 40px;
    margin-bottom: 50px;
}

.pagination * {
    display: flex;
    justify-content: center;
}
</style>