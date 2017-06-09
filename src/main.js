// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import VueLazyload from 'vue-lazyload'
import loadError from './assets/images/loadError.jpg'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  	preLoad: 1.3,
  	error: loadError,
  	loading: loadError,
  	try: 3 // default 1
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,	
  template: '<App/>',
  components: { App }
})
