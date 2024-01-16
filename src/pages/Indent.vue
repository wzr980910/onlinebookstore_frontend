<template>
    <div class="Container">
        <div class="tableDiv">
            <el-table class="centered-table" header-align = "center">
                <el-table-column prop="id" label="商品详情" width="120" align-items = "center">
                </el-table-column>

                <el-table-column prop="book_name" label="单价" width="120" align-items = "center">
                </el-table-column>

                <el-table-column prop="picture" label="数量" width="120" align-items = "center">
                   
                </el-table-column>

                <el-table-column prop="price" label="优惠" width="210" align-items = "center">
                </el-table-column>

                <el-table-column prop="number" label="小计" width="260" align-items = "center">
                    
                </el-table-column>
            </el-table>
            </div>



              



    </div>
</template>





<style>
.Container {
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

.centered-table .cell {
  text-align: center; /* 单元格内容水平居中对齐 */


}

.el-table {
  line-height: 40px; /* 表格行高 */
}
</style>

