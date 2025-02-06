// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  typescript: {
    strict: true,
    shim: false,
    typeCheck: 'build'
  },

  // SSR configuration
  ssr: true,

  app: {
    head: {
      title: 'Trebound - Unlock Your Digital Potential',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Supercharge your brand with digital marketing solutions. Let Trebound guide you to online success.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap' }
      ]
    },
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: process.env.NUXT_PUBLIC_SITE_URL
  },

  image: {
    // Only allow direct URLs
    domains: ['images.unsplash.com', 'cdn.prod.website-files.com'],
    provider: 'none'
  },

  // Build configuration for Railway deployment
  nitro: {
    preset: 'node-server',
    server: {
      port: process.env.PORT ? parseInt(process.env.PORT) : 3000
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || ''
    }
  }
})
