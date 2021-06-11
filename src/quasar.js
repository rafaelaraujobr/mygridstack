import Vue from 'vue'

import './styles/quasar.scss'
import lang from 'quasar/lang/pt-br.js'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v5/mdi-v5.css'
import { Quasar, AppFullscreen } from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {
    AppFullscreen
  },
  lang: lang
})