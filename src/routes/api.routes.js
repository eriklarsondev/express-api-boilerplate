import express from 'express'
import { UserController } from '../controllers/user.controller'

export const apiRoutes = express.Router()
const userCtrl = new UserController()

apiRoutes.get('/users', userCtrl.getUsers)
