<template>
  <div>
    <div class="btn_box">
      <button class="btn"><i class="icon iconfont icon-fangdajing"></i>共239件好物</button>
    </div>
    <div class="box">
      <div class="box_left">
        <ul>
          <li class="active">家居</li>
          <li>家居</li>
          <li>家居</li>
          <li>家居</li>
          <li>家居</li>
          <li>家居</li>
          <li>家居</li>
          <li>家居</li>
          <li>家居</li>

        </ul>
      </div>
      <div class="box_right">
        <div class="img_box">
          <img src="http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png" alt="">
        <div class="img_content">回家，放松身心</div>
        </div>
        <div class="pro_type">家居分类</div>
        <div class="fenlei">
          <ul>
            <li>
              <a href="#">
                <img src="http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png" alt="">
                <h5>布艺软装</h5>
              </a>
            </li>
             <li>
              <a href="#">
                <img src="http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png" alt="">
                <h5>布艺软装</h5>
              </a>
            </li>
             <li>
              <a href="#">
                <img src="http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png" alt="">
                <h5>布艺软装</h5>
              </a>
            </li>
             <li>
              <a href="#">
                <img src="http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png" alt="">
                <h5>布艺软装</h5>
              </a>
            </li>
             <li>
              <a href="#">
                <img src="http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png" alt="">
                <h5>布艺软装</h5>
              </a>
            </li>
             <li>
              <a href="#">
                <img src="http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png" alt="">
                <h5>布艺软装</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
  export default{
    data(){
      return{}
    },
    created(){},
    components:{
    }
  }
</script>
<style scoped>
.btn_box{
  width:100%;
  text-align: center;
  background:#fff;
  padding:0.5rem;
}
.btn{
  margin:0 auto;
  width:95%;
  padding:0.5rem;
  background:#eee;
  border:none;
}
.box{
  width:100%;
  display: flex;
  justify-content: space-between;
  background:#fff;
}
.box_left{
  width:20%;
  min-height:78vh
}
.box_left ul li{
  width:100%;
  text-align: center;
  padding:0.5rem;
  font-weight: 500;
  color:#2e2e2e;
}
.box_right{
  width:80%;
  border-left:1px solid #ccc;
}
.box_left .active{
  color:brown;
  border-left:2px solid brown;
}
.img_box{
  position:relative;
  width:100%;
  height:120px;
}
.img_box img{
  width:100%;
  height:100%;
}
.img_box .img_content{
  position:absolute;
  top:45%;
  left:32%;
  color:#fff;
}
.pro_type{
  text-align: center;
  margin-top:10px;
  color: #333;
}
.pro_type::before{
  content:"——";
  display: inline-block;
  margin-right: 10px;

}
.pro_type::after{
  content:"——";
  display: inline-block;
  margin-left: 10px;
}
.fenlei{
  padding-left:10px
}
.fenlei ul{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content:left;
}
.fenlei ul li{
  width:33%;
  text-align: center;
}
.fenlei ul li a{
  display: block;
  width:100%;
  text-align: center;
}
.fenlei ul li a img{
  width:100%;
  height:75px;
}
.icon-fangdajing{
  margin-right:0.4rem;
}
</style>
