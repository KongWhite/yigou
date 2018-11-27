<template>
  <div>
    <ul class="info_box">
      <li>
        <i class="icon iconfont icon-shouji"></i><input type="text" placeholder="请输入手机号码">
      </li>
      <li>
        <i class="icon iconfont icon-yonghu"></i><input type="text" placeholder="请输入用户名或昵称">
      </li>
      <li>
        <i class="icon iconfont icon-mima"></i><input type="password" placeholder="请输入密码">
      </li>
      <li>
        <i class="icon iconfont icon-mima"></i><input type="password" placeholder="请确认密码">
      </li>
      <li>
        <i class="icon iconfont icon-yanzhengma"></i><input type="text" placeholder="请输入验证码">
        <button class="getMsg">获取验证码</button>
      </li>
      <li><button class="btn">注册</button></li>
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
  margin-top:0.8rem;
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
.getMsg{
  position:absolute;
  right:5%;
  top:50%;
  margin-top:-25px;
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

