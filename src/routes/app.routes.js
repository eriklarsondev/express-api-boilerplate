import express from 'express'
import path from 'path'

export const appRoutes = express.Router()

// render homepage
appRoutes.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
})

// redirect to homepage
appRoutes.use((req, res) => {
  res.status(404).redirect('/')
})
