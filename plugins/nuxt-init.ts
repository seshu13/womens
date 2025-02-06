export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()
  
  // Ensure nuxt app is available
  if (!nuxtApp) {
    console.error('Nuxt app not initialized')
    throw new Error('Nuxt app not initialized')
  }

  return {
    provide: {
      isNuxtReady: true
    }
  }
})
