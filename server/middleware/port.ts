export default defineEventHandler(() => {
  // Log environment for debugging
  console.log('Environment:', {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    NITRO_PORT: process.env.NITRO_PORT,
  })
})
