<template>
    <div>
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>关于我们-陈慧团队</h3>
                    <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#">陈慧</a></li>
                        <li><a href="#">吴孟桦</a></li>
                        <li><a href="#">杨万淞</a></li>
                        <li><a href="#">邓桂材</a></li>
                        <li><a href="#">吴泽睿</a></li>
                        <li><a href="#">陈康乐</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>产品与服务</h3>
                    <ul>
                        <li><a href="#">没有产品</a></li>
                        <li><a href="#">没有服务</a></li>
                
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>社交媒体</h3>
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>版权所有 &copy; 2024  陈慧有限公司</p>
            </div>
        </footer>

    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
    margin-top: 40px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-column {
    flex-basis: 30%;
}

.footer-column h3 {
    color: #333;
    font-size: 18px;
    margin-bottom: 10px;
}

.footer-column ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.footer-column li {
    margin-bottom: 5px;
}

.footer-column a {
    color: #666;
    text-decoration: none;
}

.footer-column a:hover {
    color: #333;
}

.footer-bottom {
    margin-top: 20px;
    color: #999;
    font-size: 14px;
}
</style>