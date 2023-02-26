import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import router from './router'


const options = {
  confirmButtonColor: '#FF0000',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, options);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
