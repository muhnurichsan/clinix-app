import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import { uniMoon, uniSun, uniArrowRight } from 'vue-unicons/src/icons'
import 'vue-unicons/dist/vue-unicons-ssr.css'

Unicon.add([uniMoon, uniSun, uniArrowRight])
Vue.use(Unicon)
