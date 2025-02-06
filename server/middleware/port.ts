export default defineEventHandler((event) => {
  // Ensure we're using the PORT from environment variables
  process.env.PORT = process.env.PORT || '3000'
})
