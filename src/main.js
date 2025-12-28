import './assets/main.css'
import './assets/css/bootstrap/bootstrapmin.css'
import './assets/css/bootstrap/font/bootstrap-icons.css'
import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import * as regularIcons from '@fortawesome/free-regular-svg-icons'

import { MotionPlugin } from '@vueuse/motion'

import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap JS
import 'bootstrap'


// Load ALL solid icons
Object.values(solidIcons).forEach(icon => {
  if (icon.iconName) library.add(icon)
})

// Load ALL brand icons (this includes WhatsApp!)
Object.values(brandIcons).forEach(icon => {
  if (icon.iconName) library.add(icon)
})


// Load ALL regular icons

Object.values(regularIcons).forEach(icon => {
  if (icon.iconName) library.add(icon)
})


createApp(App)
    .use(router)
    .use(createPinia())
    .use(MotionPlugin)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
