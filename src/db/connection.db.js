import mongoose from 'mongoose'
import { DB_CONFIG } from '../config/db.config'

export default class DatabaseConnection {
  constructor() {
    this.connect()
  }

  async connect() {
    const connection = DB_CONFIG.url

    try {
      await mongoose.connect(connection)
      console.log(`\nsuccesfully connected to ${connection}\n`)
    } catch (err) {
      throw new Error(err)
    }
  }
}
