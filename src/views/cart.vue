<template>
  <div>
    <!--没有订单-->
    <div class="no_pro" v-if="isshow">
      <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
      <p>
        <a href="#">去添加点什么吧</a>
      </p>
    </div>
    <!--有订单-->
    <div class="cart" v-if="(!isshow)">
      <!--承诺-->
      <ul class="title">
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
        <li>满88元免邮费</li>
      </ul>
      <!--订单-->
      <div class="pro">
        <div class="pro_item" v-for="(item,index) in proitems" :key="item.goods_id">
          <div class="inp"><input type="checkbox" :checked="(item.checked==1? true:false)" @click="check(index)"></div>
          <div class="img_url"><img :src="item.list_pic_url" alt=""></div>
          <div class="price">
            <div class="price_content">
              <p v-if=istrue>{{item.goods_name}}</p><p v-if=istrue>{{"x"+item.number}}</p><p v-if=(!istrue)>已选择</p>
            </div>
            <div class="price_num">
              <div>{{"￥"+item.market_price}}</div>
              <div class="btn_group" v-if=(!istrue)>
                <button @click="changeNum(index,-1)">-</button>
                <input type="text" :value="item.number">
                <button @click="changeNum(index,1)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--底部-->
      <div class="footer">
        <div class="all">
          <input type="checkbox" @click="all" id="chk" checked>
          <div>{{"全选("+num+")"}}</div>
          <div>{{total}}</div>
        </div>
        <div class="btns">
          <button @click="change">{{btns}}</button>
          <button class="btn" @click="(i%2==0? del():buy())" :disabled="(i%2==0)? false:xiadan" >{{content}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    created(){
      var url = "cart/pro";
      this.$http.get(url).then((res)=>{
        this.proitems=res.data;
        console.log(this.proitems);
      })
    },
    data(){
      return{
        proitems:[],
        i:1,
        btns:"编辑",
        content:"下单",
        istrue:true,
        xiadan:false
        
      }
    },
    methods:{
      change(){
        this.i++;
        if(this.i%2==0){
          this.btns="完成";
          this.content="删除所选项";
          this.istrue=false;
        }else{
          this.btns="编辑";
          this.content="下单";
          this.istrue=true;
        }
      },
      changeNum(index,i){
        if(i>0){
          this.proitems[index].number++;
        }else{
          this.proitems[index].number--;
          if(this.proitems[index].number<=1){
            this.proitems[index].number=1;
          }
        }
      },
      check(index){
        var check = document.getElementById("chk");
        if(this.proitems[index].checked==1){
          this.proitems[index].checked=0;
        }
        else{
          this.proitems[index].checked=1;
          this.xiadan=false;
        }
        var num=0;
        this.proitems.forEach((val,index)=>{
          if(val.checked==0){
            num++;
          }
        })
        if(num!=0){
          check.checked=false;
        }
        else{
          check.checked=true
        }
        if(num<this.proitems.length){
          this.xiadan=false;
        }else{
          this.xiadan=true;
        }
      
      },
      all(){
        var check = document.getElementById("chk")
        if(check.checked==true){
          this.proitems.forEach((val,index)=>{
            val.checked=1;
            this.xiadan=false;
          })
        }else{
           this.proitems.forEach((val,index)=>{
            val.checked=0;
            this.xiadan=true;
          })
        }
      },
      del(){
        var arr=[];
        var arr1=[];
        this.proitems.forEach((val,index)=>{
          if(val.checked==0){
            arr.push(val);
          }else{
            arr1.push(val.goods_id)
          }
        })
        this.proitems=arr;
        this.change();
        var url = 'cart/del';
        this.$http.get(url,{
          params:{
            goods_id:arr1
          }
        }).then((res)=>{
          if(res.data.code==200){
            this.showtotal("删除成功")
          }else{
            this.showtotal("删除失败")
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
        this.del()
        this.$messagebox({
          title: '温馨提示',
          message: '订单支付成功',
          showCancelButton: true,
          confirmButtonText:"继续购物",
          cancelButtonText:"返回购物车"
        }).then(action => {
          if(action == 'confirm'){
            this.$router.push("/");
          }else{
            this.$router.push("/cart");
          }
      })
      }

         
    },
    computed:{
      total(){//计算总价
			  var totalPrice = 0;
			  this.proitems.forEach(function(val,index){
          //如果check属性值为true，表示选中，就计入总价
          if(val.checked == 1){
            totalPrice = totalPrice+val.number * val.market_price;
          }
			})
			  return '￥'+totalPrice;
      },
      num(){
        var n = 0;
        this.proitems.forEach(function(val,index){
          if(val.checked==1){
            n+=val.number
          }
        })
        return n;
      },
      isshow(){
        var sw=false;
        if(this.proitems.length==0){
          sw=true;
        }else{
          sw=false
        }
        return sw
      }
    }
  }
</script>
<style scoped>
.no_pro{
  margin-top:100px;
  width:100%;
  height:300px;
  text-align: center;
}
.no_pro a{
  font-size:1.2rem;
  color:#ccc;
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
.pro .pro_item{
  display: flex;
  justify-content: left;
  align-items: center;
  background: #fff;
  padding:0.5rem;
  height:100px;
  border-bottom:1px solid #ccc;
  margin-top:5px;
  box-shadow: 1px 1px 1px #ccc;
}
.pro_item .inp{
  margin-left:0.6rem;
}
.pro_item .inp input{
  transform: scale(1.2);
}
.pro_item .img_url{
  width:80px;
  height:75px;
  margin:0 0.5rem;
  border:1px solid #ccc;
  box-shadow: 1px 1px 1px #ccc;
}
.pro_item .img_url img{
  width:100%;
  height:100%；
}
.pro_item .price{
  width:230px;
}
.pro_item .price .price_content{
  padding:0.5rem;
  display: flex;
  justify-content: space-between;
}
.price_num{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn_group{
  display: flex;
  height:30px;
}
.btn_group input{
  width: 35px;
  margin:0;
  height:30px;
  padding:5px;
}
.footer{
  position: fixed;
  bottom:55px;
  left:0;
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:50px;
  background:#fff;
}
.all{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:150px;
}
.btns{
  height:100%;
}
.btns button{
  width:100px;
  height:100%;
  border-radius: 0;
  border:none;
}
.btns .btn{
  background:brown;
  color:#fff;
}
.btn:active{
  background:crimson;
}
</style>

