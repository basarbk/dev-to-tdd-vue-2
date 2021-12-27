import Vue from 'vue'
import RandomUser from './RandomUser.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(RandomUser),
}).$mount('#app')
