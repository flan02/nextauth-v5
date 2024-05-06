import { Schema, model, models } from 'mongoose'

const accountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  type: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  providerAccountId: {
    type: String,
    required: true
  },
  refresh_token: {
    type: String,
    required: true
  },
  access_token: {
    type: String,
    required: true
  },
  expires_at: {
    type: Number,
    required: true
  },
  token_type: {
    type: String,
    required: true
  },
  scope: {
    type: String,
    required: true
  },
  id_token: {
    type: String,
    required: true
  },
  session_state: {
    type: String,
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
const Account = models.Account || model('Account', accountSchema)

export default Account