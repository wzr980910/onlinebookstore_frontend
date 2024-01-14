<script>
import { Carousel, CarouselItem, Row, Col } from 'element-ui';
// 在Vue文件中引入所需的组件

export default {
  components: {
    'el-carousel': Carousel,
    'el-carousel-item': CarouselItem,
    'el-row': Row,
    'el-col': Col
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
          image: require('@/assets/portrait.png')
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'Consectetur adipiscing elit',
          image: require('@/assets/3.jpg')
        },
        {
          id: 3,
          title: 'Card 3',
          description: 'Consectetur adipiscing elit',
          image: require('@/assets/0.jpg')
        },
        {
          id: 4,
          image: require('@/assets/2.jpg')
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
      ]
    };
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
  }
};
</script>







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
            <div class="li-card">图书
              <li>
                文艺
              </li>
              <li>
                社科
              </li>
              <li>
                教育
              </li>
            </div>
          </el-col>

        </el-row>


      </div>
      <el-carousel :interval="4000" arrow="always" type="card" class="my-carousel">
        <el-carousel-item v-for="item in dataList" :key="item.id">
          <div class="card">
            <img :src="item.image" alt="" class="card-image">
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="card">
        <img :src="require('../assets/10.jpg')" height=150px>
        <img :src="require('../assets/10.jpg')" height=150px>
        <img :src="require('../assets/10.jpg')" height=150px>
        <img :src="require('../assets/11.jpg')" height=150px>
      </div>

    </div>




    <div id="app">
      <div class="product-container">
        <div class="product-box" v-for="product in products" :key="product.name">
          <img :src="product.img" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>

    <div class="title-container">
  <div @mouseover=" showCards1OnMouseOver">
    <h3>社科</h3>
  </div>
  <div @mouseover=" showCards2OnMouseOver">
    <h3>人文</h3>
  </div>
  <div @mouseover=" showCards3OnMouseOver">
    <h3>科幻</h3>
  </div>
</div>

<div class="product-container" v-show="showCards1" >
  <div class="product-box" v-for="product in products" :key="product.name">
    <img :src="product.img" :alt="product.name">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <a href="#">Buy Now</a>
  </div>
</div>

<div class="product-container" v-show="showCards2">
  <div class="product-box" v-for="product in doproducts" :key="product.name">
    <img :src="product.img" :alt="product.name">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <a href="#">Buy Now</a>
  </div>
</div>

<div class="product-container" v-show="showCards3" >
  <div class="product-box" v-for="product in goodproducts" :key="product.name">
    <img :src="product.img" :alt="product.name">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <a href="#">Buy Now</a>
  </div>
</div>







  </div>
</template>
  

  
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

.li-card {
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: row;
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


.title-container {
  display: flex;
  justify-content: left;
  margin: 10px;
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
</style>








