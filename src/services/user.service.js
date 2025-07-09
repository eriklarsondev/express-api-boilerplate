import User from '../models/user.model'

export class UserService {
  constructor() {
    // add example user to database
    if (!User.findOne({ full_name: 'Erik Larson' })) {
      const user = new User({
        full_name: 'Erik Larson'
      })
      user.save()
    }
  }

  async getUsers() {
    return await User.find().sort({ full_name: 'asc' })
  }
}
