import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  full_name: {
    type: String,
    index: {
      unique: true
    },
    required: true
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

export default mongoose.model('User', schema, 'v1_users')
