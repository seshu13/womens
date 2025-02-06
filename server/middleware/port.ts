export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  // Set default port if not provided
  if (!process.env.PORT) {
    process.env.PORT = '3000'
  }
})
