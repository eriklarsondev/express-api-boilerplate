import 'dotenv/config'

export const APP_CONFIG = {
  port: process.env.PORT || 3000,
  basePath: process.env.BASE_PATH || '/api'
}
