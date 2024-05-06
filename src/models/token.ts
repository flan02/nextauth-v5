import { Schema, model, models } from 'mongoose'

const tokenSchema = new Schema({
  identifier: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  expires: {
    type: Date,
    required: true
  }
})

// * If you want to use the same model name, you validate that the model exists before using it
const Token = models.Token || model('Token', tokenSchema)

export default Token