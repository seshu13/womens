export default defineEventHandler((event) => {
  const port = process.env.PORT || 3000
  console.log(`Server attempting to start on port: ${port}`)
})
