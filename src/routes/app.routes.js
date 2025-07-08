import express from 'express'

export const appRoutes = express.Router()

// render homepage
appRoutes.get('/', (req, res) => {
  res.status(200).send('Hello, world!')
})

// redirect to homepage
appRoutes.use((req, res) => {
  res.status(404).redirect('/')
})
