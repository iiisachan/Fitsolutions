import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBars,
  faChevronDown,
  faXmark,
  faChevronUp,
  faArrowRight,
  faPlus,
  faHeart as fasHeart,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons'
import {
  faGoogle,
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import {
  faCircleUser,
  faHeart,
  faTrashCan
} from '@fortawesome/free-regular-svg-icons'

/* eslint-disable */
const firebaseConfig = {
  apiKey: 'AIzaSyBIGRDaQGgWIIxfkfReanmslN9jGkqO_B0',
  authDomain: 'fitsolutions-3ac43.firebaseapp.com',
  projectId: 'fitsolutions-3ac43',
  storageBucket: 'fitsolutions-3ac43.appspot.com',
  messagingSenderId: '434221025986',
  appId: '1:434221025986:web:716ab35ae88958fdce095b',
  measurementId: 'G-KBNBRP0BG2'
}
/* eslint-enable */

library.add(
  faBars,
  faXmark,
  faTwitter,
  faFacebook,
  faInstagram,
  faGoogle,
  faChevronUp,
  faChevronDown,
  faArrowRight,
  faCircleUser,
  faHeart,
  fasHeart,
  faPlus,
  faTrashCan,
  faCreditCard
)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
