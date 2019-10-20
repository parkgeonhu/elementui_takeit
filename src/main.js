import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import axios from 'axios'
import IMP from 'vue-iamport'
import 'expose-loader?$!expose-loader?jQuery!jquery'
	
import routes from './routes'
import Router from 'vue-router'


Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})


Vue.prototype.$http=axios
Vue.use(IMP, 'imp70888808')
Vue.IMP().load()
Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
