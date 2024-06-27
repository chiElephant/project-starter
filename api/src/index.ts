import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080

app.use('/', (req, res) => {
  res.status(200).send('Hello, World')
})

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
