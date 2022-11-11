import Vue from 'vue';
import App from './App.vue';
// 引入VueRouter
import VueRouter from 'vue-router';
// 引入路由器
import router from './router';
// 引入axios
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
Vue.prototype.$axios = axios;

// 完整引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
