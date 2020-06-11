import Vue from 'vue'
import App from './app.vue'
import './config.js'
import Vuerouter from "vue-router"
import router from './rouer.js'

Vue.use(Vuerouter)

var vm = new Vue({
  el:"#app",
  render:c=>c(App),
  router
})