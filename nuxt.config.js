import path from 'path'
import fs from 'fs'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Video Games Library',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,600' }
    ]
  },

  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost

    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')),
      handshakeTimeout: 120,
      requestCert: false,
      rejectUnauthorized: false,
    }
  },

  // <link href="https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,600" rel="stylesheet">

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4fc08d' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
