import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  full_name: {
    type: String,
    index: {
      unique: true
    },
    required: true
  },
  url_slug: {
    type: String
  },
  company: {
    type: String,
    default: null
  },
  job_title: {
    type: String,
    default: null
  }
})

schema.pre('save', function (next) {
  if (this.full_name) {
    this.url_slug = this.full_name.replace(/\s+/g, '-').toLowerCase()
  }
  next()
})

const model = mongoose.model('User', schema, 'v1_users')

// insert user if not already created
async function insertDefaultUser() {
  const user = await model.findOne({ full_name: 'Erik Larson' })

  if (!user) {
    model.insertOne({ full_name: 'Erik Larson' })
  }
}
insertDefaultUser()

export default model
