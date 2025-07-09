import express from 'express'
import { APP_CONFIG } from './config/app.config'
import DatabaseConnection from './db/connection.db'
import { apiRoutes } from './routes/api.routes'
import { appRoutes } from './routes/app.routes'

const app = express()
const port = APP_CONFIG.port

app.use(express.json())

app.use(APP_CONFIG.basePath, apiRoutes)
app.use(appRoutes)

// start app
app.listen(port, async () => {
  new DatabaseConnection()
  console.log(`\napp is running on port ${port}\n`)
})
