<template>
  <div>
    <div class="head">
      <div class="head_box"> 
        <img :src="pinpai.list_pic_url" alt="">
        <div class="content">{{pinpai.name}}</div>
      </div>
      <div class="head_content">
        <h5>{{pinpai.simple_desc}}</h5>
      </div>
     </div>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" class="product_list">
  <ul>
    <li class="list" v-for="item in pinpaiList" :key="item.id">
      <a @click="getInfo('detail',item.id)">
        <div><img :src="item.list_pic_url" alt=""></div>
        <h5>{{item.name}}</h5>
        <p>{{"￥"+item.retail_price}}</p>
      </a>
    </li>
  </ul>
</mt-loadmore>
    
  </div>
</template>
<script>
  export default{
    data(){
      return{
        pinpai:[],
        pinpaiList:[],
        allLoaded:false,
        pno:1,
        pageCount:0,
      }
    },
    created(){
      var id = this.$route.params.id;
      var url = 'product/pinpai';
      this.$http.get(url,{
        params:{
          id:id
        }
      }).then((res)=>{
        console.log(res.data);
        this.pinpai=res.data.pinpai;
        this.pageCount=res.data.pageCount;
        this.pinpaiList=res.data.pinpaiList;
        console.log(this.pinpaiList);
      })
    },
    components:{

    },
    methods:{
      loadBottom: function(){
        this.$refs.loadmore.onBottomLoaded();
        this.getList();
      },
      getList: function(){
        this.pno++;
        var id = this.$route.params.id;
        var url = 'product/pinpai';
        this.$http.get(url,{
          params:{
            id:id,
            pno:this.pno
          }
        }).then((res)=>{
          console.log(res);
          for(let item of res.data.pinpaiList){
            this.pinpaiList.push(item);
          }
          console.log(res.data);
        })
        this.$nextTick(function () {
          this.scrollMode = "touch";
          this.isHaveMore();
        });
      },
      mounted: function(){
        this.getList();
      },
      isHaveMore:function(){
        if(this.pageCount == this.pno){
          this.allLoaded = true;
        }
      }
    }
  }
</script>
<style scoped>
.head_box{
  width:100%;
  position:relative;
}
.head_box img{
  width:100%;
  height:180px;
}
.head_box .content{
  position: absolute;
  top:45%;
  left:40%;
  font-size:1.2rem;
  color:#fff;
}
.head_box .content::after{
  content:"—————";
  display: block;
  position: absolute;
  top:80%;
  left:3%;
  text-align: center;
}
.head .head_content{
  width:98%;
  margin:0 auto;
}
.head h5{
  text-align: center;
  line-height: 150%;
}
.product_list{
    background:#fff;
    margin-top:0.8rem;
  }
  .product_list ul{
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  .product_list ul .list{
    width:49%;
    margin:0 0.2rem 0.2rem 0;
    border:1px solid #ccc;
    text-align: center;
  }
  .product_list ul .list a{
    display: block;
    width:100%;
  }
  .product_list ul .list a img{
    width:100%;
    height:120px;
  }
  .product_list ul .list h5{
    font-size:0.8rem;
  }
  .product_list ul .list p{
    color:brown;
   }
</style>
