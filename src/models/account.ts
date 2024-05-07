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
    optional: true
  },
  access_token: {
    type: String,
    optional: true
  },
  expires_at: {
    type: Number,
    optional: true
  },
  token_type: {
    type: String,
    optional: true
  },
  scope: {
    type: String,
    optional: true
  },
  id_token: {
    type: String,
    optional: true
  },
  session_state: {
    type: String,
    optional: true
  }
})

// * If you want to use the same model name, you validate that the model exists before using it
const Account = models.Account || model('Account', accountSchema)

export default Account