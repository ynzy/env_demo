import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
let env = process.env.VUE_APP_MODE;
console.log(env);

new Vue({
  render: h => h(App),
}).$mount('#app')
