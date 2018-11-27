<template>
  <div class="app-container">
     <!--header-->
    <mt-header fixed title="易购">
    <mt-button icon="more" slot="right"></mt-button>    
    </mt-header> 
    
    <router-view></router-view>
    
    <!--tabbar-->
    <nav class="mui-bar mui-bar-tab">
		<router-link class="mui-tab-item mui-active" to="/index">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		<router-link class="mui-tab-item" to="/zhuangti">
			<span class="mui-icon mui-icon-contact"><!--<span class="mui-badge">9</span>--></span>
			<span class="mui-tab-label">专题</span>
		</router-link>
		<router-link class="mui-tab-item" to="/list/1005000">
			<span class="mui-icon mui-icon-extra mui-icon-extra-cart" ></span>
			<span class="mui-tab-label">分类</span>
		</router-link>
		<router-link class="mui-tab-item" to="/cart">
			<span class="mui-icon mui-icon-search"></span>
			<span class="mui-tab-label">购物车</span>
		</router-link>
    	<router-link class="mui-tab-item" to="/user">
			<span class="mui-icon mui-icon-search"></span>
			<span class="mui-tab-label">我的</span>
		</router-link>
	</nav>
  </div>
  </template>
<script>
	export default{
		data(){
			return{
				isShow:false,
				isTrue:true
			}
		},
		methods:{
			backup(){
				this.$router.go(-1);
			}
		},
		watch:{
			$route(now,old){     //监控路由变换，控制返回按钮的显示
				var id = this.$route.params.id;
				console.log(id);
     		if(now.path=="/index" || now.path=="/"){
          this.isShow=false;
					this.isTrue=true;
     		}else if(now.path=="/detail/"+id){
         	this.isShow=true;
					this.isTrue=false;
     		}else{
					this.isShow=true;
					this.isTrue=true;
				}
    	}
		}
	}
</script>
<style>
 	.app-container{
        padding-bottom:50px;
        overflow-x:hidden;
				padding-top:40px;
   }
   .app-container .mint-header{
	   background-color:#fefefe;
	   color:#333;
	   boxs-shadow:1px 1px 1px #ccc;
   }
</style>
