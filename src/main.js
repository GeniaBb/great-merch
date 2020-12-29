import Vue from 'vue'
import App from './App.vue'
import router from './router'
import menu from './menu.vue'
import productCard from './productCard.vue'
import mainMenu from './mainMenu.vue'

Vue.config.productionTip = false
Vue.component('app-menu', menu)
Vue.component('app-productCard', productCard)
Vue.component('app-mainMenu', mainMenu)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
