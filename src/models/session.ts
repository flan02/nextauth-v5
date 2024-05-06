import { Schema, model, models } from 'mongoose'

const sessionSchema = new Schema({
  sessionToken: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  expires: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

// * If you want to use the same model name, you validate that the model exists before using it
const Session = models.Session || model('Session', sessionSchema)

export default Session