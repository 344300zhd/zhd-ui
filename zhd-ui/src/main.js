import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
// 扩展原型链
import prototype from "@/utils/prototype";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
