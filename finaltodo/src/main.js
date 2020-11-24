import Vue from 'vue'
import App from './App.vue'
import {store} from '@/store/store';
import VueResouce from 'vue-resource';
Vue.config.productionTip = false
Vue.use(VueResouce);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
