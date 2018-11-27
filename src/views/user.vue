<template>
  <div>
    <div class="box shadow">
      <div class="user_img shadow"><img src="../assets/h.jpg" alt=""></div>
      <div class="btn_box">
        <span @click="jump('/login')">登录</span>
        <span>/</span>
        <span @click="jump('/registered')">注册</span>
      </div>
    </div>
    <div>
      <ul class="self shadow">
        <li>
          <i class="icon iconfont icon-hongbao"></i><div>商家代金券</div>
        </li>
        <li>
          <i class="icon iconfont icon-tubiaolunkuo-"></i><div>我的订单</div>
        </li>
        <li>
          <i class="icon iconfont icon-dizhi"></i><div>我的地址</div>
        </li>
        <li>
          <i class="icon iconfont icon-hongbao "></i><div>邀请有奖</div>
        </li>
        <li>
          <i class="icon iconfont icon-kefu "></i><div>客服中心</div>
        </li>
        <li>
          <i class="icon iconfont icon-bangzhu "></i><div>帮助和反馈</div>
        </li>
        <li>
          <i class="icon iconfont icon-navicon-yhxy "></i><div>协议和说明</div>
        </li>
      </ul>
    </div>
    <div class="btn">
      <button>退出登录</button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      jump(router){
        this.$router.push(router)
      }
    }
  }
</script>
<style scoped>
.box{
  padding:2rem 1rem;;
  display: flex;
  justify-content: left;
  align-items: center;
  background:#fff;
}
.user_img{
  width:60px;
  height:60px;
  border-radius:50%;
  overflow: hidden;
  background:#fff;
}
.user_img img{
  width:100%;
  height:100%;
}
.btn_box{
  margin-left:0.8rem;
}
.btn_box span{
  font-size:1.4rem;
  margin-left:0.4rem;
}
.shadow{
  box-shadow:1px 1px 1px #ccc;
}
.self{
  margin-top:0.8rem;
}
.self>li{
  display: flex;
  font-size:1.2rem;
  line-height:150%;
  border-bottom:1px solid #ccc;
  padding:0.4rem;
  color:#666;
  background: #fff;
}
.iconfont{
  font-size:1.4rem;
  margin-right:0.4rem;
}
.btn button{
  margin-top:0.8rem;
  width:100%;
  border:none;
  border-radius:0;
  height:50px;
  font-size:1.2rem;
  background:brown;
  color:#fff;
}
</style>
