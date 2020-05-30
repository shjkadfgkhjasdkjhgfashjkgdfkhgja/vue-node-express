import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  'vant/lib/index.css';
import axios from 'axios';

Vue.prototype.$axios = axios;
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
