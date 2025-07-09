import 'dotenv/config'

export const APP_CONFIG = {
  basePath: process.env.BASE_PATH || '/api',
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000
}
