export default defineNuxtPlugin((nuxtApp) => {
  // Use the nuxtApp instance passed to the plugin
  return {
    provide: {
      isNuxtReady: true
    }
  }
})
