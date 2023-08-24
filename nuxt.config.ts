// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Moosecodes.com' }
      ],
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
})
