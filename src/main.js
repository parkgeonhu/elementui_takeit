import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import axios from 'axios'
import IMP from 'vue-iamport'
import 'expose-loader?$!expose-loader?jQuery!jquery'

Vue.prototype.$http=axios
Vue.use(IMP, 'imp70888808')
Vue.IMP().load()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
