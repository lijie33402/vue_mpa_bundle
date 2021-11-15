import Vue from 'vue'
import App from './App2'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './plugins/directives'

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
