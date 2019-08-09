const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    profile_photo: String,
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Note'
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = model('User', UserSchema)
