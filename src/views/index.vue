<template>
  <div class="app">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.image_url" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!--菜单项-->
    <div class="menu shadow">
      <ul>
        <li>
          <router-link to="/list/1005000">
            <div><i class="icon iconfont icon-jiajujiafang"></i></div>
            <span>居家</span>
          </router-link>
        </li>
        <li>
          <router-link to="/list/1005001">
            <div><i class="icon iconfont icon-canyinxinxi"></i></div>
            <span>餐厨</span>
            </router-link>
        </li>
        <li>
         <router-link to="/list/1008000">
          <div><i class="icon iconfont icon-icon-test"></i></div>
          <span>配件</span>
          </router-link>
        </li>
        <li>
          <router-link to="/list/1010000">
            <div><i class="icon iconfont icon-yijia"></i></div>
            <span>服装</span>
          </router-link>
        </li>
        <li>
          <router-link to="/list/1019000">
            <div><i class="icon iconfont icon-fenlei"></i></div>
            <span>志趣</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!--品牌推荐-->
    <div class="recommend shadow">
      <router-link to="/pinpaiList" class="title">
        <h4>品牌推荐</h4>
        <h4>&gt;</h4>
      </router-link>
      <ul class="pro_box">
        <li v-for="item in brandList" :key="item.id">
          <a @click="getInfo('pinpai',item.id)"><img :src="item.pic_url" alt="">
          <div class="content">
            <h4>{{item.name}}</h4>
            <p>{{item.floor_price+"元起"}}</p>
          </div>
          </a>
        </li>
        
      </ul>
    </div>

    <!--新品推荐-->
    <div class="newgoods shadow">
      <a class="title">
        <h4>新品推荐</h4>
      </a>
      <ul class="pro_box">
        <li v-for="item in newGoodsList" :key="item.id">
          <a @click="getInfo('detail',item.id)">
            <div class="img_size">
              <img :src="item.list_pic_url" alt="">
            </div>
            <div class="pro_content">
              <h5 class="line-limit-length1">{{item.name}}</h5>
              <p>{{"￥"+item.retail_price}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <!--人气推荐-->
    <div class="newgoods shadow">
      <a href="#" class="title">
        <h4>人气推荐</h4>
      </a>
      <ul>
        <li v-for="item in hotGoodsList" :key="item.id" >
          <a href="#" class="hot_pro" @click="getInfo('detail',item.id)">
            <div class="img_box">
              <img :src="item.list_pic_url" alt="">
            </div>
            <div class="hot_content">
              <h4>{{item.name}}</h4>
              <h5>{{item.goods_brief}}</h5>
              <p>{{"￥"+item.retail_price}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <!--专题精品-->
    <div class="newgoods shadow">
      <a href="#" class="title">
        <h4>专题精品</h4>
      </a>
      <div class="jingpin_box" ref="tab">
        <ul class="clear" ref="tabWrapper">
          <li v-for="item of itemList" ref="tabitem" :key="item.id">
            <router-link to="/list" class="jingpin">
              <img :src="item.item_pic_url" alt="">
              <h4>{{item.title}}<span>{{"￥"+item.price_info+"起"}}</span></h4>
              <h5 class="line-limit-length ">{{item.subtitle}}</h5>
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  <!--具体分类-->
    <div>
      <div v-for="item in goodsList" :key="item.id" class="newgoods shadow">
      <a class="title">
        <h4>{{item.name}}</h4>
      </a>
      <ul class="pro_box">
        <li v-for="list in item.list" :key="list.id">
          <a @click="getInfo('detail',list.id)">
            <div class="img_size">
              <img :src="list.list_pic_url" alt="">
            </div>
            <div class="pro_content">
              <h5 class="line-limit-length1">{{list.name}}</h5>
              <p>{{"￥"+list.retail_price}}</p>
            </div>
          </a>
        </li>
        <li>
          <a @click="getInfo('list',goodsList[0].id)">
            <h5 class="font_size">{{"更多"+item.name+"好物"}}</h5>
            <div>
              <i class="icon iconfont icon-xiangyou"></i>
            </div>
          </a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  
  export default{
    beforeCreate() {
      (async function(self){
        var url = "product"
        var res=await self.$http.get(url)
        console.log(res.data);
        self.banner=res.data.banner;
        self.brandList=res.data.brandList;
        self.newGoodsList=res.data.newGoodsList;
        self.hotGoodsList=res.data.hotGoodsList;
        self.itemList=res.data.topicList;
        self.goodsList=res.data.goodsList
        console.log(self.itemList);
        self.$nextTick(() => {
          self.InitTabScroll();
        });
      })(this)
    },
    created() {
      this.$nextTick(() => {
          this.InitTabScroll();
        });
      
    },
    data(){
      return{
        banner:[],
        brandList:[],
        newGoodsList:[],
        hotGoodsList:[],
        itemList:[],
        goodsList:[]
      }
    },
    methods:{
       InitTabScroll(){
        let width=0;
        console.log(this.itemList.length);
        for (let i = 0; i <this.itemList.length; i++) {
          
          width+=this.$refs.tabitem[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
          console.log(width)
        }
        this.$refs.tabWrapper.style.width=width+'px'
        this.$nextTick(()=>{
          if (!this.scroll) {
            this.scroll=new BScroll(this.$refs.tab, {
              startX:0,
              click:true,
              scrollX:true,
              scrollY:false,
              eventPassthrough:'vertical'
            });
          }else{
            this.scroll.refresh()
          }
        });
      }
    },
    component:{

    },
    mounted() {
      
    }
    
     

  }
</script>
<style scoped>
 .app .mint-swipe{
    height:200px;
  }
  .app .mint-swipe .mint-swipe-items-wrap .mint-swipe-item img{
    width:100%;
    height:100%;
  }
  .app .mui-grid-view.mui-grid-9 .mui-media{
    width:20%;
  }
  .app .menu>ul{
    display: flex;
    justify-content: space-around;
    padding:1rem 0.5rem;
    background: #fff;
    text-align: center;
  }
  .app .menu ul a{
    color:#4e4e4e;
  }
  .app .menu ul div .iconfont{
    font-size:1.5rem;
  }
  .app .menu ul span{
    font-size:0.8rem;
  }
  .app .recommend{
    background:#fff;  
    padding:0.2rem 0.2rem 0.5rem 0.2rem;
  }
  .app .recommend .title{
    display: flex;
    justify-content: space-between;
    margin-top:1rem;
    padding:1rem;
    color:#3c3c3c;
  }
  .shadow{
     box-shadow: 1px 1px 1px #ccc;
     margin-top:1rem;
  }
  .app .recommend ul li{
    width:49%;
    height:100px;
    margin-bottom: 0.2rem;
    position: relative;
  }
  .content{
    position: absolute;
    top:0.5rem;
    left:0.5rem;
  }
  .content h4{
    color:#444;
    font-size:1rem;
  }
  .app .pro_box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #fff;
  }
  .app .pro_box li img{
    width:100%;
    height:100%;
  }
  .app .newgoods .title{
    display: block;
    background:#fff;
    margin-top:1rem;
    padding:0.8rem;
    color:#3c3c3c;
    text-align: center;
  }
  .app .newgoods .pro_box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  }
  .app .newgoods .pro_box .img_size{
    width:100%;
    height:78%;
    margin:0 auto;
  }
  .app .newgoods .pro_box .img_size img{
    width:100%;
    height:100%;
  }
  .app .newgoods .pro_box li{
    width:49%;
    height:180px;
    margin-bottom: 0.2rem;
    position: relative;
  }
  .app .newgoods .pro_content{
   position: absolute;
   top:75%;
   left:20%;
   text-align: center;
  }
  .pro_content h5{
    color:#333;
    font-size:1rem;
  }
  .pro_content p{
    color:brown;
    margin-bottom:0;
  }
  .hot_pro{
    display: flex;
    justify-content: left;
    padding:10px;
    align-items: center;
    border-bottom:1px solid #ccc;
    background:#fff;
  }
  .hot_pro .img_box{
    width:100px;
    height:100px;
    margin-right:10px;
  }
  .hot_pro .img_box img{
    width:100%;
    height:100%;
    
  }
  .hot_pro .hot_content h4{
    color:#333;
  }
  .hot_pro .hot_content p{
    color:brown;
  }
  .app .jingpin{
    display: block;
    width:340px;
    height:220px;
    margin-top:0.8rem;
    margin-right:10px;
   
  }

  .clear::after{
    content:"";
    display: block;
    clear:both;
  }
  .app .jingpin_box ul li{
    float:left;
    width:350px;
    
  }
  .app .jingpin_box{
    padding:0 1rem;
    background:#fff;
    overflow: hidden;
    width: 100vw;
    height:230px;
  }
  .app .jingpin img{
    width:100%;
    height:150px;
  }
  .app .jingpin h4{
    color:#333;
  }
  .app .jingpin h4 span{
    color:brown;
  }
  .line-limit-length {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:200px;
    }
    .line-limit-length1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:120px;
    }
    .font_size{
      font-size:1.2rem;
      margin:5rem 0 1rem 0;
    }
    .icon-xiangyou{
      color:#8f8f94;
      font-size:1.2rem;
    }
</style>

