<template>
  <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
    <ul class="pinpai">
      <li class="pinpai_item shadow" v-for="(item,index) in pinpaiList" :key="item.index" @click="getInfo('pinpai',item.id)">
        <div class="item_img">
          <img :src="item.list_pic_url" alt="">
        </div>
        <div class="content">
          <span>{{item.name}}</span>
          <span>{{item.floor_price+"元起"}}</span>
        </div>
      </li>
    </ul>
  </mt-loadmore>
</template>
<script>
  export default{
    data(){
      return{
        pinpaiList:[],
        allLoaded:false,
        pno:1,
        pageCount:0,
      }
    },
    created(){
      var url = 'product/pinpaiList';
      this.$http.get(url).then((res)=>{
        this.pinpaiList=res.data.list;
        this.pageCount=res.data.pageCount;
      })
    },
    componemts:{},
    methods:{
       loadBottom: function(){
        this.$refs.loadmore.onBottomLoaded();
        this.getList();
      },
      getList: function(){
        this.pno++;
        var url = 'product/pinpaiList';
        this.$http.get(url,{
          params:{
            pno:this.pno
          }
        }).then((res)=>{
          for(let item of res.data.list){
            this.pinpaiList.push(item);
          }
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
  .pinpai .pinpai_item{
    width:100%;
    position: relative;
    margin-bottom:0.4rem;
    height: 180px;
  }
  .pinpai .pinpai_item .item_img{
    width:100%;
    height: 100%;
  }
  .pinpai .pinpai_item .item_img img{
    width:100%;
    height:100%;
  }
  .pinpai .pinpai_item .content{
    position: absolute;
    
    top:45%;
    left:0;
    width:100%;
    text-align: center;
  }
  .pinpai .pinpai_item .content span{
    color:#fff;
    font-size:1.2rem;
  }
  .pinpai .pinpai_item .content span:nth-child(1){
    padding-right: 0.8rem;
    border-right: 1px solid #fff;
  }
  .pinpai .pinpai_item .content span:nth-child(2){
    padding-left:0.8rem;
  }
  .shadow{
    box-shadow: 1px 1px 1px #ccc;
  }
</style>

