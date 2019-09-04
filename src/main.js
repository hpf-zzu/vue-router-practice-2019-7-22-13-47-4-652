import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import state from './store/index'
import router from './router/index'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
const vueRouter = new VueRouter(router)
new Vue({
    router:vueRouter,
    store: new Vuex.Store(state),
    render: h => h(App),
}).$mount('#app')
