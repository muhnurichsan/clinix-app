const path = require('path');

export default {

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Clinix App',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        type: '',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,700;0,900;1,200;1,400;1,500;1,700;1,900&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/tailwind.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  purgeCSS: {
    whitelist: ['dark-mode'],
    mode: 'postcss'
  },

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faSun', 'faMoon', 'faArrowRight', 'faArrowLeft'],
      regular: ['faSun', 'faMoon'],
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/fontawesome',
    'nuxt-purgecss',
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      './assets/*.scss',
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    }
  },
}
