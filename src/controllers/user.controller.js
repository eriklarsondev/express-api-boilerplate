import { UserService } from '../services/user.service'

const userService = new UserService()

export class UserController {
  constructor() {}

  async getUsers(req, res, next) {
    try {
      const response = await userService.getUsers()
      res.status(200).json({ results: response, count: response.length })
    } catch (err) {
      next(err)
    }
  }

  async getUserBySlug(req, res, next) {
    try {
      const response = await userService.getUserBySlug(req.params.slug)
      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
}
