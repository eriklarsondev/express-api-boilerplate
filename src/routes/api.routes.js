import express from 'express'
import { UserController } from '../controllers/user.controller'
import { handleError } from '../middleware/error.middleware'

export const apiRoutes = express.Router()
const userCtrl = new UserController()

apiRoutes.get('/users', userCtrl.getUsers)
apiRoutes.get('/users/:slug', userCtrl.getUserBySlug)

// mount error handler
apiRoutes.use(handleError)
