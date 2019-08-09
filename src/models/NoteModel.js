const { Schema, model } = require('mongoose')

const NoteSchema = new Schema(
  {
    note: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Note', NoteSchema)
