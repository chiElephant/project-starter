import express from 'express'

const PORT = process.env.PORT || 8080

const app = express()

const server = app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`)
)

app.use('/api/example', (req, res) => {
  res.status(200).send('Hello, World')
})

export { app, server }
