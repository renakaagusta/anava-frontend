import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue2Editor from "vue2-editor";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vueSmoothScroll from 'vue2-smooth-scroll'
import HighchartsVue from 'highcharts-vue'
import VueParticles from 'vue-particles'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

Vue.use(BootstrapVue);
Vue.use(Vue2Editor);
Vue.use(vueSmoothScroll);
Vue.use(HighchartsVue);
Vue.use(VueCarousel);
Vue.use(VueParticles)
Vue.use(VueTabs)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
