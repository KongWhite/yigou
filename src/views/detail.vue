<template>
  <div class="app">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in gallery" :key="item.index">
        <img :src="item.img_url" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!--承诺-->
    <div class="cart shadow">
      <ul class="title">
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
        <li>满88元免邮费</li>
      </ul>
    </div>
    <div class="detail shadow">
      <div class="detail_content">
        <h4>{{info.name}}</h4>
        <h5>{{info.goods_brief}}</h5>
        <p>{{"￥"+info.retail_price}}</p>
      </div>
      <div class="size">
        <p>请选择规格和数量</p>
        <p>&gt;</p>
      </div>
    </div>
    <div class="xiangqing shadow">
      <h4>商品参数</h4>
      <div class="chengfen">
        <ul class="chengfen_content">
          <li v-for="item of attribute" :key="item.index"><p>{{item.name}}</p><h5 class="line-limit-length1">{{item.value}}</h5></li>
        </ul>
      <div>
          <!--图片介绍-->
      <div class="img_info" v-html="info.goods_desc">
      </div>
    </div>
  </div>

      <!--按钮-->
      <div class="tubiao">
        <ul>
          <li>
            <a href="#"><i class="icon iconfont icon-shoucang"></i></a>
          </li>
          <li>
            <router-link to="/cart">
              <i class="icon iconfont icon-gouwuche-01"></i>
            </router-link>
          </li>
          <li>
            <button @click="buy">立即购买</button>
          </li>
          <li>
            <button class="danger" @click="add_pro(info.id)">加入购物车</button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    created(){
      var id = this.$route.params.id;
      console.log(id);
      var url='product/detail'
      this.$http.get(url,{
        params:{
          id
        }
      }).then((res)=>{
        this.gallery=res.data.gallery;
        this.info=res.data;
        this.attribute=res.data.attribute;
        console.log(res.data);
      })
    },
    data(){
      return{
        gallery:[],
        info:[],
        attribute:[]
      }
    },
    components:{

    },
    methods:{
      add_pro(id){
        var url = 'cart/cart';
        this.$http.get(url,{
          params:{
            id
          }
        }).then((res)=>{
          console.log(res);
          if(res.data.code==200){
            this.showtotal("添加成功!")
          }else{
            this.showtotal("商品已存在")
          }
        })
      },
      showtotal(msg){
        this.$toast({
          message: msg,
          duration: 1000
          });
      },
      buy(){
        this.$messagebox({
          title: '温馨提示',
          message: '购买成功',
          showCancelButton: true,
          confirmButtonText:"返回首页",
        }).then(action => {
          if(action == 'confirm'){
            this.$router.push("/");
          }
      })
      },
      updata(num){
        var url = "car/updata";
        this.$http.get(url,{
          params:{
            number:num
          }
        })
      }
    }
  }
</script>
<style scoped>
  .app .mint-swipe{
    height:300px;
  }
  .app .mint-swipe .mint-swipe-items-wrap .mint-swipe-item img{
    width:100%;
    height:100%;
  }
  .cart{
    background:#fff;
  }
  .cart .title{
    display: flex;
    justify-content: space-between;
    padding:10px 5px;
  }
  .cart .title li{
    background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/servicePolicyRed-518d32d74b.png) 0 center no-repeat;
    padding-left:15px;
    font-size:0.8rem;
    color:#555;
  }
  .detail{
    padding-top:0.8rem;
    margin-top:0.5rem;
    background:#fff;
    
  }
  .detail .detail_content{
    text-align:center;
    border-bottom:1px solid #ccc;
  }
  .detail .detail_content h4{
    color:#333;
    font-size:1.2rem;
    margin-bottom:0.6rem;
  }
  .detail .detail_content p{
    margin-top:0.4rem;
    font-size:1rem;
    color:brown;
  }
  .size{
    display:flex;
    justify-content:space-between;
    padding:0.5rem;
  }
  .size p{
    font-size:1rem;
    margin:0;
    color:#333;
  }
  .shadow{
    box-shadow:1px 1px 1px #ccc;
  }
  .xiangqing{
    margin-top:0.4rem;
    background:#fff;
    padding:0.4rem;
  }
  .xiangqing h4{
    color:#666;
  }
  .chengfen_content{
    padding:0.8rem;
  }
  .chengfen_content li{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0.4rem;
    background:#eee;
    border-radius:5px;
    margin-bottom:0.4rem;
  }
  .chengfen_content li p{
    font-size:1rem;
    margin:0;
    margin-right:1rem;
  }
  .chengfen_content li h5{
    font-size:1.2rem;
    margin:0;
  }
  .tubiao ul{
    
    display: flex;
    justify-content: space-between;
    align-items:center;
    background:#fff;
    width:100vw;
    position: fixed;
    left:0;
    bottom:0;
  }
  .tubiao ul li{
    width:25%;
  }
  .tubiao ul li a{
    width:100%;
    display: block;
    text-align: center;
    color:#333;
  }
  .tubiao ul li a .icon{
    font-size:1.6rem;
  }
  .tubiao ul li a .icon:active{
    color:coral;
  }
  .tubiao ul li button{
    border-radius:0;
    width:100%;
    height:50px;
    border:none;
    font-size:1rem;
    padding:0;
  }
  .tubiao ul li .danger{
    background:brown;
    color:#fff;
  }
  .tubiao ul li .danger:active{
    background:crimson;
  }
   .img_info >>> p {
    width:100% ;
    margin-bottom:0;
  }
  .img_info >>> p img{
    width:100%; 
    height:100%;
  }
  .line-limit-length1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:210px;
    }


</style>
