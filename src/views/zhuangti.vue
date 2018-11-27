<template>
  <div>
    <!--专栏-->
     <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" class="box shadow">
     <div class="box shadow" v-for="item in list" :key="item.id">
      <a>
        <img :src="item.item_pic_url" alt="">
        <div class="content">
          <h4>{{item.title}}</h4>
          <h5>{{item.subtitle}}</h5>
          <p>{{item.price_info+"元起"}}</p>
        </div>
      </a>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        list:[],
        allLoaded:false,
        pno:1,
        pageCount:0,
      }
    },
    created(){
      var url = "product/zhuangti";
      this.$http.get(url).then((res)=>{
        this.list=res.data.list;
        this.pno=res.data.pno;
        this.pageCount=res.data.pageCount;
        console.log(this.list);
        console.log(res.data);
      })
    },
    components:{

    },
    methods:{
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
        var url = "product/zhuangti";
        this.$http.get(url,{
          params:{
            pno:this.pno
          }
        }).then((res)=>{
          console.log(res);
          for(let item of res.data.list){
            this.list.push(item);
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
  .box{
    width:100%;
    background:#fff;
    padding:0.8rem;
  }
  .box img{
    width:100%;
    height:180px;
    
  }
  .content{
    margin-top:1rem;
    text-align: center;
  }
  .content h4{
    color:#333;
  }
  .content p{
    color:brown;
  }
  .shadow{
    box-shadow: 1px 1px 1px #ccc;
    margin-bottom:0.8rem;
  }
</style>
