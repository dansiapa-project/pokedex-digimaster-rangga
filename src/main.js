import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from './plugins/axios';
import events from './plugins/events';
import VueTailwind from 'vue-tailwind/dist/full';
import './assets/tailwind.css';
import VueTailwindSettings from './plugins/vue-tailwind';
import 'tailwindcss/dist/tailwind.css';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.use(VueTailwind, VueTailwindSettings);
Vue.prototype.$http = axios;
Vue.prototype.$bus = events;
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
