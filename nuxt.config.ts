// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: false
   },
  ssr: true,
  spaLoadingTemplate: false,
  app: {
    // cdnURL: 'web.panana.app',
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
        }
      ]
    }
  }
})
