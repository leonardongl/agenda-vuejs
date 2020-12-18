// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueIziToast from "vue-izitoast"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "izitoast/dist/css/iziToast.css"
import {toast} from './mixins/toast'
import VueMask from 'v-mask'

window.axios = require ('axios')
Vue.use(VueIziToast);
Vue.use(VueMask);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mixins: [toast],
  router,
  components: { App },
  template: '<App/>'
})
