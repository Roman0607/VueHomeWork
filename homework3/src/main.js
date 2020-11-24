import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from '@/routes'

Vue.use(VueResource),
Vue.use(VueRouter);
 

export const router=new VueRouter({
  routes,
  mode:'history'
})
Vue.config.productionTip = false
export const eventBus=new Vue();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
