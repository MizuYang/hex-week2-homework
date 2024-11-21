// https://nuxt.com/docs/api/configuration/nuxt-config

import process from 'node:process'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/hexscrool-Nuxt3-week2-homework/' : '/',

    // 設定 npm run generate 打出輸入的 assets 會放到 .output/static 資料夾
    buildAssetsDir: '/static/'
  },

  // 全域的樣式
  css: [
    '@/assets/styles/all.scss'
  ],

  runtimeConfig: {
    public: {
      // 正式環境的 base URL
      baseUrl: process.env.NODE_ENV === 'production' ? '/hexscrool-Nuxt3-week2-homework/' : '/'
    },
  },
})
