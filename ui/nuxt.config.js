import colors from 'vuetify/es5/util/colors';

export default {
  target: 'server',

  head: {
    titleTemplate: '%s - CRM',
    title: 'Akvarium',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/theme/styles.scss'],

  plugins: ['~plugins/date.filter.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify', '@nuxtjs/svg'],

  modules: ['@nuxtjs/axios', ['cookie-universal-nuxt', { alias: 'cookiz' }]],

  axios: {
    baseURL: 'http://localhost:8000/api'
  },

  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   // theme: {
  //   //   dark: true,
  //   //   themes: {
  //   //     dark: {
  //   //       // primary: colors.blue.darken2,
  //   //       // accent: colors.grey.darken3,
  //   //       // secondary: colors.amber.darken3,
  //   //       // info: colors.teal.lighten1,
  //   //       // warning: colors.amber.base,
  //   //       // error: colors.deepOrange.accent4,
  //   //       // success: colors.green.accent3
  //   //     }
  //   //   }
  //   // }
  // },
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
  },

  server: {
    host: '192.168.3.7',
  },

  build: {
    vendor: ['lodash'],
  },
};
