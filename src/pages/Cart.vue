<template>
    <div class="bookListContainer">
        <div class="tableDiv">
            <el-table :data="tableData" stripe class="table">
                <el-table-column prop="id" label="ID" width="120">
                </el-table-column>

                <el-table-column prop="book_name" label="书名" width="120">
                </el-table-column>

                <el-table-column prop="picture" label="图片" width="120">
                    <template slot-scope="scope">
                        <img :src="scope.row.coverUrl" width="40" height="40" />
                    </template>
                </el-table-column>

                <el-table-column prop="price" label="价格" width="210">
                </el-table-column>

                <el-table-column prop="number" label="数量" width="260">
                    <template slot-scope="scope">
                        <el-input-number v-model="scope.row.number" :min="0" controls-position="right"
                            @change="updateNumber(scope.row)"></el-input-number>
                    </template>
                </el-table-column>



                <el-table-column prop="pages" label="操作" width="220">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" round @click="showDetails(scope.row.id)">
                            查看详情
                        </el-button>
                        <el-button size="mini" type="primary" round @click="delCarBook(scope.row.id)">
                            删除商品
                        </el-button>
                    </template>
                </el-table-column>


            </el-table>

            <span>总计：{{ count }}</span>
            <el-button class="custom-button" style="margin-left: 10px;" @click="showImageModal">
                <a class="link-text">结算</a>
                
            </el-button>
            <el-dialog :visible="imageModalVisible" width="30%" @close="closeImageModal">
                <img src="../assets/10.jpg" style="width: 100%;" />
            </el-dialog>

        </div>
        <div class="pagination">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="pageInfo.pageNow" :page-sizes="[5, 10, 15, 20]" :page-size="pageInfo.pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="pageInfo.totalBooks">


            </el-pagination>

        </div>


    </div>
</template>


<script>
import axios from 'axios'



export default {
    name: "CarList",

    data() {

        return {
            pageInfo: {
                pageNow: 1,     //当前页数
                pageSize: 10,   //每页显示的数据量
                totalBooks: 0    //总数据量
            },
            tableData: [],
            imageModalVisible: false,
            count: 1

        };

    },
    mounted() {
        //页面加载时发送请求数据
        this.getCarList()
    },
    methods: {
        getCarList() {
            axios.post("/getCarList", {
                pageNow: this.pageInfo.pageNow,
                pageSize: this.pageInfo.pageSize,
            }).then((res) => {

                if (res.data.statusCode == 200) {
                    //成功获取数据，更新表格数据和页码数据
                    this.tableData = res.data.content.message.books.map(book => {
                        return {
                            ...book,
                            // coverUrl: book.picture ? require('../assets/cover/' + book.picture) : ''
                        };
                    });
                    // 计算总和
                    this.count = this.tableData.reduce((sum, book) => sum + (book.price * book.number), 0);

                    // this.tableData = res.data.content.message.books
                    this.pageInfo.totalBooks = res.data.content.message.bookCount

                } else if (res.data.statusCode == 500) {
                    //数据获取失败，弹出提示信息
                    return this.$message.error("购物车为空或者" + res.data.statusMessage)
                }
            }).catch((error) => {
                return this.$message.error("获取图书列表失败：" + error)
            });
        },
        handleSizeChange(val) {
            //设置每页显示条数时，更新pageSize，重新获取图书列表
            this.pageInfo.pageSize = val
            this.getCarList()
        },
        handleCurrentChange(val) {
            //翻页或跳转特定页码时，更新当前页码pageNow，重新获取图书列表
            this.pageInfo.pageNow = val
            this.getCarList()
        },

        showDetails(id) {
            //点击查看详情按钮，路由带参跳转
            this.$router.push({
                name: 'bookDetails',
                query: {
                    id: id
                }
            })
        },
        delCarBook(id) {
            axios.post("/delCarBook", {
                id: id
            }).then((res) => {
                if (res.data.statusCode == 200) {
                    this.rel = res.data.content.message
                    this.$router.go(0);
                } else {
                    return this.$message.error(res.data.statusMessage)
                }
            }).catch((error) => {
                return this.$message.error("获取图书详情失败：" + error)
            })
        },
        showImageModal() {
            this.imageModalVisible = true;
        },
        closeImageModal() {
            this.imageModalVisible = false;
        },
        updateNumber(row) {
            // 发送请求更新数据库的number字段
            axios.post('/updateNumber', { id: row.id, number: row.number })
                .then(response => {
                    if (response.data.statusCode == 200) {
                        // 处理成功响应
                        this.getCarList()
                    } else {
                        return this.$message.error(res.data.statusMessage)
                    }
                })
                .catch(error => {
                    // 处理错误

                    console.error('更新失败:', error);
                });
        }






    }
};
</script>



<style scoped>
.bookListContainer {
    height: 100%;
}

.tableDiv {
    width: 80%;
    text-align: center;
    margin: auto;
    background: #fff;
    padding: 20px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
    vertical-align: middle
}

.table {
    line-height: 40px;
    text-align: right;
}

.pagination {
    margin-top: 40px;
}

.pagination * {
    display: flex;
    justify-content: center;
}


.link-text {
  color: #ffffff;
}

.link-text:hover {
  cursor: pointer;
  
}

.quantity-input.el-button {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 0;
}

.quantity-input .el-input {
    margin: 0 10px;
}
</style>