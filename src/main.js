import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import VueHighlightJS from 'vue-highlightjs'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'

import * as firebase from 'firebase/app';
import 'firebase/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyBxfPv9tJSBCnYYplmIHW-eREVlYt5ZaBE",
  authDomain: "skeleton-screens.firebaseapp.com",
  databaseURL: "https://skeleton-screens.firebaseio.com",
  projectId: "skeleton-screens",
  storageBucket: "skeleton-screens.appspot.com",
  messagingSenderId: "418054163963",
  appId: "1:418054163963:web:9368fb8cff28ea5d664f5e",
  measurementId: "G-END4N5HEV3"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.prototype.$analytics = firebase.analytics();

Vue.use(VueMeta)

Vue.use(VueAxios, axios)

Vue.use(VueClipboard);

VueClipboard.config.autoSetContainer = true // add this line

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')