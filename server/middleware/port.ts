export default defineEventHandler(() => {
  // Just log the environment for debugging
  console.log('Starting server with environment:', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    NITRO_HOST: process.env.NITRO_HOST,
    NITRO_PORT: process.env.NITRO_PORT
  })
})
