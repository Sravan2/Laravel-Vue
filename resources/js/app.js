
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VuejsDialog from 'vuejs-dialog';


import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
Vue.prototype.$userInfo = document.querySelector("meta[name='userInfo']").getAttribute('content');
//Vue.prototype.$loggedIn = true;
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(VuejsDialog);


import HomeComponent from './components/HomeComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';

const routes = [
  {
      name: 'dashboard',
      path: '/',
      component: HomeComponent,
      meta: { 
                requiresAuth: true,
            }
  },
  {
      name: 'home',
      path: '/home',
      component: HomeComponent,
      meta: { 
                requiresAuth: true,
            }

  },
  {
      name: 'profile',
      path: '/profile',
      component: ProfileComponent,
      meta: { 
                requiresAuth: true,
            }

  },
  {
      name: 'login',
      path: '/login',
      component: LoginComponent
  },
  {
      name: 'register',
      path: '/register',
      component: RegisterComponent
  }
];


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('welcome-component', require('./components/WelcomeComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app'
// });


//const router = new VueRouter({ mode: 'history', routes: routes});
const router = new VueRouter({routes: routes});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('access_email') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = localStorage.getItem('access_email')
      //next({ name: 'home'})
      next()
    }
  } else {
    next() 
  }
})

const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');