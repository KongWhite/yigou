import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


//引入MintUi
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//引入Mui的相关样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import '@/public/css/base.css'



Vue.config.productionTip = false
axios.defaults.baseURL ='http://yigou.applinzi.com/';

Vue.prototype.$http = axios;

Vue.prototype.getInfo = function (name,id){
  this.$router.push({ name: name, params: { id: id }})
}

Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
