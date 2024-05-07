import { Schema, model, models } from 'mongoose'

const verificationTokenSchema = new Schema({
  identifier: {
    type: String,
    unique: true,
    required: true
  },
  token: {
    type: String,
    unique: true,
    required: true
  },
  expires: {
    type: Date,
    required: true
  }
})

// * If you want to use the same model name, you validate that the model exists before using it
const VerificationToken = models.VerificationToken || model('VerificationToken', verificationTokenSchema)

export default VerificationToken