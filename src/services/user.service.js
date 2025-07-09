import User from '../models/user.model'

export class UserService {
  constructor() {}

  async getUsers() {
    return await User.find().sort({ full_name: 'asc' })
  }

  async getUserBySlug(slug) {
    const user = await User.findOne({
      url_slug: slug.toLowerCase()
    })
    return user
  }
}
