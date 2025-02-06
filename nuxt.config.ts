export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  typescript: {
    strict: true,
    shim: false,
    typeCheck: 'build'
  },

  // SSR configuration
  ssr: true,

  // Build configuration for production deployment
  nitro: {
    preset: 'node-server',
    timing: false,
  },

  experimental: {
    payloadExtraction: false
  },

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Trebound - Unlock Your Digital Potential',
      meta: [
        { name: 'description', content: 'Supercharge your brand with digital marketing solutions. Let Trebound guide you to online success.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap' }
      ]
    },
    keepalive: true,
    baseURL: '/'
  },

  // Runtime config
  runtimeConfig: {
    app: {
      baseURL: '/',
      buildAssetsDir: '/_nuxt/',
      cdnURL: process.env.NUXT_PUBLIC_SITE_URL || ''
    },
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
      apiBase: process.env.RAILWAY_PUBLIC_URL || '',
    }
  },

  // Image configuration
  image: {
    domains: ['images.unsplash.com', 'cdn.prod.website-files.com'],
    provider: 'none'
  }
})
