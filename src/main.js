import Vue from 'vue'
import App from './App.vue'
import VueStripeMenu from 'vue-stripe-menu'
import router from "./router/index"
import 'vue-stripe-menu/dist/vue-stripe-menu.css';


Vue.use(VueStripeMenu);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
