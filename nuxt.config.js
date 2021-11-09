import { i18N } from "./configurations/i18n";

export default {
  target: 'static',
  router: {
    base: '/'
  },


  head: {
    title: 'xalq',
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    { src: '@/assets/scss/main.scss', lang: 'scss' }
  ],

  plugins: [
   
  ],

  components: true,

  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/vuetify'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    "@nuxtjs/auth",
    [ "nuxt-i18n", i18N ],
    'cookie-universal-nuxt',
  ],
  axios: {
    baseURL: 'https://xn.technocorp.uz/api',
    headers: {
      "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web",
    }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          user: {  url: '/user/me/', method: 'get', propertyName: false,
            headers: {
              "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web"
            }
          },
          logout: false     
        },
        tokenType: 'bearer'
      }
    },
  },  

  build: {
  }
}
