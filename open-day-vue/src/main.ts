import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import VueScrollTo from 'vue-scrollto';
// @ts-ignore
import VueNavigationBar from "vue-navigation-bar";
import "./scss/vue-navigation-bar.css";


Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
Vue.component("vue-navigation-bar", VueNavigationBar);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
