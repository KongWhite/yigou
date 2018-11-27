<template>
<div class="app">
 <p class="tab" ref="tab">
  <ul class="tab_content" ref="tabWrapper">
   <li :class="[item.id==items.id?'active':'','tab_item']" v-for="item in itemList" :key="item.id" ref="tabitem" @click="getlist(item.id)" >
     {{item.name}}
   </li>
  </ul>
 </p>
  <div class="content">
    <h4>{{items.name}}</h4>
    <h5>{{items.front_desc}}</h5>
  </div>
   <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" class="product_list">
    <ul>
      <li class="list" v-for="item in items.data" :key="item.id">
        <a @click="getInfo('detail',item.id)">
          <div><img :src="item.list_pic_url" alt=""></div>
          <h5 class="line-limit-length1">{{item.name}}</h5>
          <p>{{"￥"+item.retail_price}}</p>
        </a>
      </li>
    </ul>
  </mt-loadmore>
</div>
</template>
<script>
  import BScroll from 'better-scroll';
  export default {
    data() {
      return{
        itemList:[],
        items:[],
        allLoaded:false,
        pno:1,
        pageCount:0,
      }
    },
    created(){
     (async function(self){
        var url = "product/lists";
        await self.$http.get(url).then((res)=>{
          console.log(res.data.goodsList),
          self.itemList=res.data.goodsList
        })
        
        await self.$nextTick(() => {
          self.InitTabScroll();
        });
        var id = self.$route.params.id;
        var url1 = "product/list?id="+id;
        await self.$http.get(url1).then((res)=>{
          console.log(res.data);
          self.items=res.data;
          self.pageCount=res.data.pageCount;
          
        });
      })(this)
    },
    methods:{
      InitTabScroll(){
        let width=0
        for (let i = 0; i <this.itemList.length; i++) {
          width+=this.$refs.tabitem[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
        }
        this.$refs.tabWrapper.style.width=width+'px';
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
      },
      getlist(id){
        var url='product/list';
        this.$http.get(url,{
          params:{
            id
          }
        }).then((res)=>{
          this.items=res.data;
        })
      },
       loadBottom: function(){
        this.$refs.loadmore.onBottomLoaded();
        this.getList();
      },
      getList: function(){
        this.pno++;
        var id = this.$route.params.id;
        var url1 = "product/list";
        this.$http.get(url1,{
          params:{
            id:id,
            pno:this.pno
          }
        }).then((res)=>{
          console.log(res);
          for(let item of res.data.data){
            this.items.data.push(item);
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
  };
</script>
 <style scoped>
 .app{
  background:#fff;
  min-height: 86vh;
 }
  .tab{
    position: fixed;
    top:40px;
    left:0;
    width: 100vw;
    overflow: hidden;
    padding-top:5px;
    background: #fff;
    
  }
  .tab .tab_content::after{
    content:"";
    display: block;
    clear:both;
  }
  .tab .tab_content .tab_item{
    float:left;
    width:60px;
    text-align: center;
  }
  .active{
    color:brown;
    border-bottom:1px solid brown;
  }
  .content{
    text-align: center;
    margin-top:27px;  
    padding-top:10px;
  }
  .content h4{
    color:#444;
    font-size:1rem;
    margin:10px 0;
  }
  .product_list{
    background:#fff;
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
  .product_list ul .list a div{
    height:150px;
    width:100%;
  }
  .product_list ul .list a img{
    width:100%;
    height:100%;
  }
  .product_list ul .list h5{
    font-size:0.8rem;
    margin-bottom:0.4rem;
  }
  .product_list ul .list p{
    color:brown;
   }
   .line-limit-length1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:160px;
    margin: 0 auto;
    }
</style>