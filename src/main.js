//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/cue-fontawesome'

library.add(faPhone, faUser)

createApp(App)
    //.component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')
