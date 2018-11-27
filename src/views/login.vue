<template>
  <div>
    <ul class="info_box">
      <li>
        <i class="icon iconfont icon-yonghu"></i><input type="text" placeholder="请输入用户名或昵称">
      </li>
      <li>
        <i class="icon iconfont icon-mima"></i><input type="password" placeholder="请输入密码">
      </li>
       <li><button class="btn">登录</button></li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{}
    }
  }
</script>
<style scoped>
.info_box{
  margin-top:1.6rem;
}
.info_box li{
  position:relative;
  border-radius: 5px;
}
.info_box li input{
  padding:10px 10px 10px 50px;
  font-size:1rem;
  height:50px;
}
.info_box .iconfont{
  position: absolute;
  font-size:1.6rem;
  top:50%;
  left:2%;
  margin-top:-20px;
  border-right:1px solid #ccc;
  padding-right:0.4rem;
  color:#ccc;
}
.btn{
  width:100%;
  border:none;
  border-radius:0;
  color:#fff;
  background:brown;
  height:60px;
  font-size:1.2rem;
}
</style>

