<template>
  <div>
    <div class="carousel-container">
      <div class="card">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">商品分类</div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="li-card">
              <div v-for="(row, rowIndex) in bookClassifyContent" :key="rowIndex">
                <p class="classify-first-title">
                  <i :class="bookClassifyIcon[rowIndex]"></i>
                  <span>{{ bookClassifyTitle[rowIndex] }}</span>
                </p>
                <p class="classify-second-title">
                  <span v-for="(item, colIndex) in row" :key="colIndex" class="classify-second-item">
                    <el-link>{{ item }}</el-link>
                  </span>
                </p>
              </div>
            </div>
          </el-col>

        </el-row>


      </div>
      <el-carousel :interval="4000" arrow="always" type="card" class="my-carousel">
        <el-carousel-item v-for="item in dataList" :key="item.id">
          <div class="">
            <img :src="item.image" alt="" class="card-image">
          </div>
        </el-carousel-item>
      </el-carousel>




      <div class="card-right">
        <div class="ingrid-content inbg-purple-dark">
          <h2>·最新公告</h2>
        </div>

        <div class="scroll-container">
          <ul class="notice-list">
            <li v-for="(notice, index) in notices" :key="index">{{ notice }}</li>
          </ul>
        </div>
      </div>

    </div>



    <div class="titlemagin">
      <h2>推荐读物</h2>
      <hr class="hr">
    </div>
    <div id="app">
      <div class="product-container">
        <div class="product-box" v-for="product in products" :key="product.name">
          <img :src="product.img" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <a href="bookdetails">Buy Now</a>
        </div>
      </div>
    </div>

    <div class="title-container">
      <div @mouseover="showCards1OnMouseOver">
        <h3>社科</h3>
      </div>
      <div @mouseover="showCards2OnMouseOver">
        <h3>人文</h3>
      </div>
      <div @mouseover="showCards3OnMouseOver">
        <h3>科幻</h3>
      </div>

    </div>
    <hr class="hr">
    <transition name="el-zoom-in-center">
      <div class="product-container" v-if="showCards1">
        <div class="product-box" v-for="product in products" :key="product.name">
          <img :src="product.img" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <a href="bookdetails">Buy Now</a>
        </div>
      </div>
    </transition>

    <transition name="el-zoom-in-center">
      <div class="product-container" v-if="showCards2">
        <div class="product-box" v-for="product in doproducts" :key="product.name">
          <img :src="product.img" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <a href="bookdetails">Buy Now</a>
        </div>
      </div>
    </transition>


    <transition name="el-zoom-in-center">
      <div class="product-container" v-if="showCards3">
        <div class="product-box" v-for="product in goodproducts" :key="product.name">
          <img :src="product.img" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <a href="bookdetails">Buy Now</a>
        </div>
      </div>
    </transition>







  </div>
</template>




<script>
import { Carousel, CarouselItem, Row, Col } from 'element-ui';
import BBSHeader from "@/components/BBSHeader";
// 在Vue文件中引入所需的组件

export default {
  components: {
    'el-carousel': Carousel,
    'el-carousel-item': CarouselItem,
    'el-row': Row,
    'el-col': Col,
    BBSHeader
  },
  data() {
    return {

      showCards1: false,
      showCards2: true,
      showCards3: false,
      cards: [{
        img: require('@/assets/11.jpg'),
        name: 'Product 1',
        description: 'Description of Product 1'
      },
      {
        img: require('@/assets/11.jpg'),
        name: 'Product 2',
        description: 'Description of Product 1'
      },
      ],

      dataList: [
        {
          id: 1,
          title: 'Card 1',
          description: 'Lorem ipsum dolor sit amet',
          image: require('@/assets/welcome.jpg')
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'Consectetur adipiscing elit',
          image: require('@/assets//welcome.jpg')
        },
        {
          id: 3,
          title: 'Card 3',
          description: 'Consectetur adipiscing elit',
          image: require('@/assets//welcome.jpg')
        },
        {
          id: 4,
          image: require('@/assets//welcome.jpg')
        }
      ],
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
      doproducts: [
        {
          img: require('@/assets/10.jpg'),
          name: 'Product 1',
          description: 'Description of Product 1'
        },
        {
          img: require('@/assets/10.jpg'),
          name: 'Product 2',
          description: 'Description of Product 1'
        },
        {
          img: require('@/assets/10.jpg'),
          name: 'Product 3',
          description: 'Description of Product 1'
        },
        {
          img: require('@/assets/10.jpg'),
          name: 'Product 4',
          description: 'Description of Product 1'
        },

        {
          img: require('@/assets/10.jpg'),
          name: 'Product 6',
          description: 'Description of Product 2'
        }
      ],
      goodproducts: [
        {
          img: require('@/assets/1.jpg'),
          name: 'Product 1',
          description: 'Description of Product 1'
        },
        {
          img: require('@/assets/1.jpg'),
          name: 'Product 2',
          description: 'Description of Product 1'
        },
        {
          img: require('@/assets/1.jpg'),
          name: 'Product 3',
          description: 'Description of Product 1'
        },
        {
          img: require('@/assets/1.jpg'),
          name: 'Product 4',
          description: 'Description of Product 1'
        },

        {
          img: require('@/assets/1.jpg'),
          name: 'Product 6',
          description: 'Description of Product 2'
        }
      ],
      notices: [
        '·公告 1',
        '·公告 2',
        '·公告 3',
        '·公告 1',
        '·公告 2',
        '·公告 3',
        '·公告 1',
        '·公告 2',
        '·公告 3',
        '·公告 1',
      ],
      bookClassifyContent: [
        ['文艺', '经济管理', '社科', '成功励志'],
        ['教材', '教辅', '考试', '外语', '音像'],
        ['儿童文学', '卡通绘本', '儿童科普', '启蒙教育', '益智游戏', '美术手工'],
        ['生活', '科技', '医学', '建筑']
      ],
      bookClassifyIcon: ['el-icon-office-building', 'el-icon-school', 'el-icon-guide', 'el-icon-cpu'],
      bookClassifyTitle: ['人文社科', '文教音像', '童书', '生活科技']
    };
  },
  mounted() {
  },

  methods: {
    showCards1OnMouseOver() {
      // 设置 showCards2 为 true，并隐藏其他产品
      this.showCards1 = true;
      this.showCards2 = false;
      this.showCards3 = false;
    },
    showCards2OnMouseOver() {
      this.showCards1 = false;
      this.showCards2 = true;
      this.showCards3 = false;
    },
    showCards3OnMouseOver() {
      this.showCards1 = false;
      this.showCards2 = false;
      this.showCards3 = true;
    }
  },

};
</script>

  

  
<style scoped>
.my-carousel {

  background-color: transparent;
  border-radius: 10px;
  width: 800px;
  height: 340px;

}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background-color: pink;
  /* margin: 0 auto; */
}



.card {
  width: 300px;
  height: 400px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: transparent;
  text-align: center;

}

.card-right {

  width: 300px;
  height: 400px;
  text-align: left;
  background-color: pink;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.li-card {
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.classify-first-title {
  margin-top: 10px;
  margin-bottom: 5px;
}

.classify-second-item {
  margin-right: 10px;
  margin-top: 5px;
}

.classify-second-title {
  margin-top: 10px;
}



.card-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  object-fit: contain;
}




.bg-purple-dark {
  background: rgba(255, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}



.grid-content {
  border-radius: 4px;
  min-height: 36px;
}


.ingrid-content {
  border-radius: 4px;
  min-height: 36px;
}

.inbg-purple-dark{
  background-color:transparent

}
.scroll-container {
  height: 300px;
  /* 设置容器高度 */
  overflow: hidden;
  /* 隐藏溢出内容 */
  margin-top: 10px;
  margin-left: 20px;
}

.notice-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  animation: scroll 10s linear infinite;
  /* 设置滚动动画 */
 
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    /* 初始位置 */
  }

  100% {
    transform: translateY(-100%);
    /* 滚动至顶部 */
  }
}


.titlemagin {
  height: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}

.title-container {
  display: flex;
  justify-content: left;
  margin: 10px;
  margin-top: 40px;
}

.title-container>div>h3 {
  max-width: 80px;

}

.title-container>div {
  flex-basis: 10%;
  text-align: center;
  padding: 2px;
  border: 1px solid #ccc;
  transition: background-color 0.3s ease;
  width: 10px;
}


.title-container>div:hover {
  background-color: #f0f0f0;
}




.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.product-box {
  width: 200px;
  height: 360px;
  /* border: 1px solid #ccc; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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

}
</style>








