export default defineEventHandler((event) => {
  // Railway will automatically set the PORT environment variable
  // This middleware is just for local development
  if (!process.env.PORT) {
    process.env.PORT = '3000'
  }
})
