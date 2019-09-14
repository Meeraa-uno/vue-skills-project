import Vue from 'vue'
import App from './App.vue'
import * as VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  VueRouter,
  render: h => h(App),
}).$mount('#app')
